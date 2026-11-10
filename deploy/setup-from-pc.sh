#!/usr/bin/env bash
#
# One-off set-up of automatic deploys, run from the developer PC (Git Bash):
#
#     bash deploy/setup-from-pc.sh
#
# It needs: the `vps` SSH alias (root on the server), the GitHub CLI signed in
# with access to the repo, and a deploy key pair at KEY below. Create the pair
# with:  ssh-keygen -t ed25519 -N "" -C phinetech-github-deploy -f <KEY>
#
# Steps:
#   1. Copies the deploy script, the installer and the PUBLIC key to the
#      server and runs the installer there. That adds
#        - /usr/local/bin/phinetech-deploy
#        - /etc/sudoers.d/phinetech-deploy  (restart of phinetech.service only)
#        - one authorized_keys line for the `phinetech` user, pinned to the
#          deploy script with no shell and no forwarding
#   2. Stores the four secrets the Deploy workflow reads on the GitHub repo.
#
# Safe to run again: every step replaces what it wrote before.

set -euo pipefail

REPO=Chrisphine10/phinetech
HOST=78.159.126.22
KEY="${DEPLOY_KEY:-$HOME/keystores/phinetech-deploy/deploy_key}"
here=$(cd "$(dirname "$0")" && pwd)

[ -f "$KEY" ] && [ -f "$KEY.pub" ] || { echo "deploy key not found at $KEY"; exit 1; }

echo "== 1/2 installing on the server"
tar -C "$here" -cf - phinetech-deploy install.sh -C "$(dirname "$KEY")" "$(basename "$KEY").pub" |
  ssh -o BatchMode=yes -o ConnectionAttempts=1 -o ConnectTimeout=15 vps '
    set -e
    d=/root/phinetech-deploy-setup
    rm -rf "$d"; mkdir -p "$d"; tar -xf - -C "$d"
    bash "$d/install.sh"
    cut -d" " -f1,2 /etc/ssh/ssh_host_ed25519_key.pub > "$d/hostkey"
    echo "HOSTKEY $(cat "$d/hostkey")"
  ' | tee /tmp/phinetech-setup.log

hostkey=$(grep '^HOSTKEY ' /tmp/phinetech-setup.log | cut -d' ' -f2-)
[ -n "$hostkey" ] || { echo "could not read the server host key"; exit 1; }

echo "== 2/2 storing the GitHub secrets"
gh secret set DEPLOY_SSH_KEY --repo "$REPO" < "$KEY"
gh secret set DEPLOY_HOST --repo "$REPO" --body "$HOST"
gh secret set DEPLOY_USER --repo "$REPO" --body "phinetech"
gh secret set DEPLOY_KNOWN_HOSTS --repo "$REPO" --body "$HOST $hostkey"
gh secret list --repo "$REPO"

echo
echo "Done. Test it with:  gh workflow run Deploy --repo $REPO"

#!/usr/bin/env bash
# One-off installer for the phinetech.co.ke deploy path. Run as root from the
# directory holding phinetech-deploy and deploy_key.pub.
set -euo pipefail
here=$(cd "$(dirname "$0")" && pwd)

# 1. The deploy script: root-owned, outside the app user's own directory, so
#    the app user cannot rewrite what the pinned key runs.
install -o root -g root -m 0755 "$here/phinetech-deploy" /usr/local/bin/phinetech-deploy
ln -sfn /usr/local/bin/phinetech-deploy /var/www/phinetech/deploy.sh
chown -h phinetech:phinetech /var/www/phinetech/deploy.sh

# 2. Let the app user restart its own service, and nothing else.
tmp=$(mktemp)
cat > "$tmp" <<'EOF'
# phinetech.co.ke deploys: the app user may restart its own service only.
phinetech ALL=(root) NOPASSWD: /usr/bin/systemctl restart phinetech.service
EOF
visudo -cf "$tmp" >/dev/null
install -o root -g root -m 0440 "$tmp" /etc/sudoers.d/phinetech-deploy
rm -f "$tmp"
visudo -c >/dev/null

# 3. The restricted key: pinned to the deploy script, no shell, no forwarding.
ak=/var/www/phinetech/.ssh/authorized_keys
pub=$(cat "$here/deploy_key.pub")
touch "$ak"
grep -v 'phinetech-github-deploy' "$ak" > "$ak.new" || true
printf 'command="/usr/local/bin/phinetech-deploy",restrict %s\n' "$pub" >> "$ak.new"
mv "$ak.new" "$ak"
chown phinetech:phinetech "$ak"
chmod 600 "$ak"

echo "installed:"
ls -la /usr/local/bin/phinetech-deploy /var/www/phinetech/deploy.sh /etc/sudoers.d/phinetech-deploy "$ak"
sudo -l -U phinetech | tail -2
bash -n /usr/local/bin/phinetech-deploy && echo "script syntax ok"

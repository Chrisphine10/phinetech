"use client";

import { LogoTile } from "@/components/logo-tile";
import type { Project } from "@/lib/site";

/**
 * Project identity mark.
 *
 * Uses the project's logo in the shared uniform tile when we hold one, and a
 * monogram tile of the same footprint otherwise — so a grid of projects lines
 * up whether or not the artwork has arrived.
 */
export function ProjectMark({
  project,
  height = 44,
}: {
  project: Project;
  height?: number;
}) {
  return (
    <LogoTile
      src={project.logo}
      alt={`${project.name} logo`}
      height={height}
      ground={project.logoGround}
      fallback={
        <span
          aria-hidden
          className="grid shrink-0 place-items-center rounded-[8px] border border-line bg-surface-muted font-mono font-semibold tracking-tight text-foreground"
          style={{
            width: Math.round(height * 2.6),
            height,
            fontSize: height * 0.34,
          }}
        >
          {project.monogram}
        </span>
      }
    />
  );
}

/**
 * Hero scene: the moon from the PhineTech mark, rendered in 3D.
 *
 * Relevance over decoration — the logo is a wolf howling at a moon with a red
 * dot beside it, so the scene reuses those exact elements: a lit lunar sphere,
 * inclined orbit rings, and a red body (the brand's #B12724 dot) orbiting it.
 *
 * Pure CSS: layered radial gradients for the sphere and craters, 3D transforms
 * for the rings. No Three.js, no canvas, no runtime JS — the whole thing is a
 * server component and adds nothing to the JS bundle. Motion stops under
 * prefers-reduced-motion, leaving a still moon rather than an empty box.
 */

const CRATERS = [
  { top: "18%", left: "30%", size: 17, depth: 0.16 },
  { top: "31%", left: "62%", size: 11, depth: 0.13 },
  { top: "52%", left: "24%", size: 22, depth: 0.14 },
  { top: "63%", left: "58%", size: 13, depth: 0.11 },
  { top: "44%", left: "45%", size: 8, depth: 0.1 },
  { top: "74%", left: "38%", size: 9, depth: 0.12 },
  { top: "26%", left: "46%", size: 6, depth: 0.09 },
];

export function HeroScene() {
  return (
    <div
      aria-hidden
      className="scene-3d pointer-events-none relative grid h-[300px] w-full place-items-center select-none sm:h-[380px]"
    >
      {/* ---- inclined orbit rings ---- */}
      {[
        { size: 260, tilt: 74, spin: 0, delay: "0s" },
        { size: 330, tilt: 74, spin: 32, delay: "-4s" },
        { size: 400, tilt: 78, spin: -22, delay: "-8s" },
      ].map((ring) => (
        <div key={ring.size} className="absolute inset-0 grid place-items-center">
          <div
            className="anim-float rounded-full border border-line"
            style={{
              width: ring.size,
              height: ring.size,
              transform: `rotateX(${ring.tilt}deg) rotateZ(${ring.spin}deg)`,
              animationDuration: "11s",
              animationDelay: ring.delay,
              opacity: 0.75,
            }}
          />
        </div>
      ))}

      {/* ---- the moon ---- */}
      <div className="anim-float relative" style={{ animationDuration: "9s" }}>
        <div
          className="relative rounded-full"
          style={{
            width: 172,
            height: 172,
            // Lit from the upper left, matching the logo's moon.
            background:
              "radial-gradient(circle at 34% 30%, #ffffff 0%, #efefec 34%, #cfd0cd 62%, #a9abaa 82%, #85888a 100%)",
            boxShadow:
              "inset -14px -12px 34px rgb(24 36 50 / 0.34), 0 0 46px rgb(230 234 239 / 0.22)",
          }}
        >
          {CRATERS.map((c, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                top: c.top,
                left: c.left,
                width: `${c.size}%`,
                height: `${c.size}%`,
                background: `radial-gradient(circle at 38% 34%, rgb(24 36 50 / ${c.depth}) 0%, rgb(24 36 50 / ${c.depth * 0.5}) 55%, transparent 72%)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ---- the brand's red body, orbiting ---- */}
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="anim-orbit"
          style={
            {
              "--orbit-r": "148px",
              "--orbit-t": "17s",
            } as React.CSSProperties
          }
        >
          <span
            className="block rounded-full"
            style={{
              width: 17,
              height: 17,
              background: "var(--accent)",
              boxShadow: "0 0 18px color-mix(in srgb, var(--accent) 55%, transparent)",
            }}
          />
        </div>
      </div>

      {/* ---- a second, smaller body on a wider, slower orbit ---- */}
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="anim-orbit"
          style={
            {
              "--orbit-r": "196px",
              "--orbit-t": "29s",
            } as React.CSSProperties
          }
        >
          <span
            className="block size-2 rounded-full bg-foreground"
            style={{ opacity: 0.45 }}
          />
        </div>
      </div>
    </div>
  );
}

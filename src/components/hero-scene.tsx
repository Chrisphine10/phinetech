/**
 * Rotating wireframe cube with orbiting nodes.
 *
 * Built entirely from CSS 3D transforms — no Three.js, no canvas, no runtime
 * JS at all. It is a server component. Motion stops for reduced-motion users
 * via the global rule, leaving a static isometric object rather than nothing.
 */

const FACES = [
  { label: "front", transform: "translateZ(70px)" },
  { label: "back", transform: "rotateY(180deg) translateZ(70px)" },
  { label: "right", transform: "rotateY(90deg) translateZ(70px)" },
  { label: "left", transform: "rotateY(-90deg) translateZ(70px)" },
  { label: "top", transform: "rotateX(90deg) translateZ(70px)" },
  { label: "bottom", transform: "rotateX(-90deg) translateZ(70px)" },
];

export function HeroScene() {
  return (
    <div
      aria-hidden
      className="scene-3d pointer-events-none relative grid h-[300px] w-full place-items-center select-none sm:h-[360px]"
    >
      {/* orbit rings */}
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="anim-float rounded-full border border-line"
          style={{
            width: 250,
            height: 250,
            transform: "rotateX(74deg)",
            animationDuration: "9s",
          }}
        />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="anim-float rounded-full border border-line"
          style={{
            width: 320,
            height: 320,
            transform: "rotateX(74deg) rotateZ(30deg)",
            animationDuration: "11s",
            animationDelay: "-3s",
          }}
        />
      </div>

      {/* the cube */}
      <div className="anim-float" style={{ animationDuration: "8s" }}>
        <div
          className="preserve-3d anim-spin-y relative"
          style={{ width: 140, height: 140 }}
        >
          {FACES.map((face) => (
            <div
              key={face.label}
              className="absolute inset-0 border border-line-strong"
              style={{
                transform: face.transform,
                background:
                  "color-mix(in srgb, var(--foreground) 3%, transparent)",
                backdropFilter: "blur(1px)",
              }}
            >
              {/* inner cross-hatch so faces read as engineered panels */}
              <div
                className="absolute inset-2 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                  backgroundSize: "23px 23px",
                }}
              />
            </div>
          ))}

          {/* vertex nodes, sitting on the cube corners */}
          {[
            [70, 70, 70],
            [-70, 70, 70],
            [70, -70, 70],
            [-70, -70, 70],
            [70, 70, -70],
            [-70, 70, -70],
            [70, -70, -70],
            [-70, -70, -70],
          ].map(([x, y, z], i) => (
            <span
              key={i}
              className="absolute top-1/2 left-1/2 block size-1.5 rounded-full bg-foreground"
              style={{
                transform: `translate3d(${x - 3}px, ${y - 3}px, ${z}px)`,
                opacity: 0.55,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

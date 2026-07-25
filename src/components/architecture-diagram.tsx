/**
 * "How it fits together" — an animated system diagram.
 *
 * Products sit on a shared engineering layer, which in turn speaks to the
 * external rails every Kenyan business system has to touch. Connectors animate
 * as flowing dashes so the diagram reads as a live system rather than a static
 * org chart.
 *
 * Pure SVG + CSS. Server component, no runtime JS. `currentColor` throughout
 * so it inverts with the theme.
 */

const PRODUCTS = [
  { short: "IntelliCash\nSACCO" },
  { short: "IntelliCash\nVSLA" },
  { short: "ClassCompass" },
  { short: "PhineTech\nPOS" },
  { short: "Hodi" },
];

const RAILS = ["KRA eTIMS", "Mobile money & cards", "Android / Play Store"];

export function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 900 430"
      className="h-auto w-full text-foreground"
      role="img"
      aria-label="Diagram: five PhineTech products sit on a shared engineering layer, which connects to KRA eTIMS, mobile money and card payments, and Android distribution."
    >
      {/* ---------------------------- products row ---------------------------- */}
      {PRODUCTS.map((p, i) => {
        const x = 15 + i * 180;
        const lines = p.short.split("\n");
        return (
          <g key={p.short}>
            <rect
              x={x}
              y={22}
              width={150}
              height={78}
              rx={8}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              opacity="0.85"
              className="anim-draw"
              style={{ "--draw-length": 460, "--i": i } as React.CSSProperties}
            />
            {lines.map((line, li) => (
              <text
                key={line}
                x={x + 75}
                y={lines.length === 1 ? 66 : 56 + li * 17}
                textAnchor="middle"
                fill="currentColor"
                fontSize="13"
                fontWeight="600"
              >
                {line}
              </text>
            ))}

            {/* product -> platform */}
            <line
              x1={x + 75}
              y1={100}
              x2={x + 75}
              y2={182}
              stroke="currentColor"
              strokeWidth="1.25"
              strokeDasharray="4 5"
              opacity="0.5"
              className="anim-dash"
            />
            <circle
              cx={x + 75}
              cy={182}
              r="3"
              fill="currentColor"
              className="anim-node"
              style={{ "--i": i } as React.CSSProperties}
            />
          </g>
        );
      })}

      {/* --------------------------- platform layer --------------------------- */}
      <rect
        x={15}
        y={182}
        width={870}
        height={66}
        rx={10}
        fill="currentColor"
        opacity="0.055"
      />
      <rect
        x={15}
        y={182}
        width={870}
        height={66}
        rx={10}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="anim-draw"
        style={{ "--draw-length": 1900, "--i": 5 } as React.CSSProperties}
      />
      <text
        x={450}
        y={210}
        textAnchor="middle"
        fill="currentColor"
        fontSize="14"
        fontWeight="700"
        letterSpacing="0.08em"
      >
        SHARED ENGINEERING LAYER
      </text>
      <text
        x={450}
        y={232}
        textAnchor="middle"
        fill="currentColor"
        fontSize="12"
        opacity="0.62"
      >
        Ledgers · access control · audit trail · reporting · offline tolerance
      </text>

      {/* ------------------------------- rails -------------------------------- */}
      {RAILS.map((rail, i) => {
        const x = 65 + i * 270;
        return (
          <g key={rail}>
            <line
              x1={x + 115}
              y1={248}
              x2={x + 115}
              y2={332}
              stroke="currentColor"
              strokeWidth="1.25"
              strokeDasharray="4 5"
              opacity="0.5"
              className="anim-dash"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <rect
              x={x}
              y={332}
              width={230}
              height={62}
              rx={8}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeDasharray="7 4"
              opacity="0.75"
            />
            <text
              x={x + 115}
              y={369}
              textAnchor="middle"
              fill="currentColor"
              fontSize="13"
              fontWeight="600"
            >
              {rail}
            </text>
            <circle
              cx={x + 115}
              cy={332}
              r="3"
              fill="currentColor"
              className="anim-node"
              style={{ "--i": i + 2 } as React.CSSProperties}
            />
          </g>
        );
      })}

      <text
        x={450}
        y={418}
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        opacity="0.5"
        letterSpacing="0.06em"
      >
        EXTERNAL RAILS
      </text>
    </svg>
  );
}

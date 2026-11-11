import Image from "next/image";

/**
 * Framed product photograph.
 *
 * One treatment for every product, project and shop picture so a grid of them
 * reads as a set: greyscale to match the theme (colour returns on hover),
 * corner registration marks, a slow scan line and a mono caption. The frame
 * is drawn in CSS (see `.shot` in theme.css), so the source photographs stay
 * untouched and can be swapped by replacing a file.
 *
 * The pictures are stock photographs chosen to show the kind of thing each
 * product is. They are illustrative, not pictures of our own units, and the
 * detail pages say so.
 */
export function ProductShot({
  photo,
  label,
  tag,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  photo: { src: string; alt: string; position?: string };
  /** Mono caption, bottom left. */
  label?: React.ReactNode;
  /** Small chip, top right. */
  tag?: React.ReactNode;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`shot ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="shot-img"
        style={{ objectPosition: photo.position ?? "center" }}
      />
      <span aria-hidden className="shot-shade" />
      <span aria-hidden className="shot-scan" />
      <span aria-hidden className="shot-marks" />
      {tag && <span className="shot-tag hud-chip">{tag}</span>}
      {label && <span className="shot-label hud">{label}</span>}
    </div>
  );
}

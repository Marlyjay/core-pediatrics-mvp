import type { LessonImage } from "../types";

export default function LessonFigure({ image }: { image: LessonImage }) {
  return (
    <figure className="my-6 overflow-hidden rounded-lg border border-ink/10 bg-white">
      <img src={image.src} alt={image.alt} className="w-full object-contain" />
      <figcaption className="border-t border-ink/10 px-4 py-3 text-xs leading-relaxed text-charcoal">
        <p className="text-sm text-ink">{image.caption}</p>
        {image.source && <p className="mt-1 text-charcoal/70">Source: {image.source}</p>}
      </figcaption>
    </figure>
  );
}

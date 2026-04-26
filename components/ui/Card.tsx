interface CardProps {
  trackUrl: string;
}

function Card({ trackUrl }: CardProps) {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-2xl bg-[#fff5f343] p-2 sm:max-w-sm">
      <iframe
        width="100%"
        height="352"
        frameBorder="no"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        src={trackUrl}
        className="rounded-xl"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Card;

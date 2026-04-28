interface CardProps {
  trackUrl: string;
}

function Card({ trackUrl }: CardProps) {
  return (
    <div className="card-shadow w-full overflow-hidden rounded-2xl bg-[#fff5f343] p-2 sm:max-w-100">
      <iframe
        width="100%"
        height="152"
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

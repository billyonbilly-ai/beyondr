interface CardProps {
  trackUrl: string;
}

function Card({ trackUrl }: CardProps) {
  return (
    <div className="h-75 w-100 shrink-0 overflow-hidden rounded-2xl bg-[#fff5f368] p-2">
      <div className="relative h-full overflow-hidden rounded-xl">
        <iframe
          width="100%"
          height="102%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={trackUrl}
          className="absolute top-[-1%] left-0 rounded-xl"
        ></iframe>
      </div>
    </div>
  );
}

export default Card;

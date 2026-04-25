import Card from "./Card";
import { tracks } from "@/app/constants";

function CardContainer() {
  return (
    <div className="relative z-10 flex h-full items-center justify-center">
      <div className="scrollbar-hide flex gap-4 overflow-x-auto overflow-y-hidden pb-4">
        {tracks.map((trackUrl, index) => (
          <Card key={index} trackUrl={trackUrl} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;

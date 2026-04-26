"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import { tracks } from "@/app/constants";

function CardContainer() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cards = scrollContainer.children;
    const cardWidth = (cards[0] as HTMLElement).offsetWidth;
    const gap = 16;
    const totalWidth = (cardWidth + gap) * tracks.length;

    gsap.to(scrollContainer, {
      x: -totalWidth,
      duration: 80,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const progress = parseFloat(x) % totalWidth;
          return `${progress}px`;
        },
      },
    });

    return () => {
      gsap.killTweensOf(scrollContainer);
    };
  }, []);

  return (
    <div className="relative z-10 flex h-full items-center justify-center overflow-hidden">
      <div ref={scrollRef} className="flex gap-4 pb-4">
        {tracks.map((trackUrl, index) => (
          <Card key={`first-${index}`} trackUrl={trackUrl} />
        ))}
        {tracks.map((trackUrl, index) => (
          <Card key={`second-${index}`} trackUrl={trackUrl} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;

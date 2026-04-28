"use client";

import { useState, useEffect } from "react";
import HomeNavbar from "@/components/ui/HomeNavbar";
import Card from "@/components/ui/Card";
import { spotifyTracks } from "../constants";

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/noise.png";

    img.onload = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 4000);
    };
  }, []);

  return (
    <main className="bg-brand-black fixed inset-0 overflow-hidden p-3.5 sm:p-7">
      <div
        className={`bg-brand-black absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
          isLoaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: "url('/images/noise.png')",
            backgroundRepeat: "repeat",
          }}
        />
        <p className="text-brand-white text-xl">Loading...</p>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "url('/images/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 flex h-full items-center justify-center gap-4">
        {spotifyTracks.map((trackUrl, index) => (
          <Card key={index} trackUrl={trackUrl} />
        ))}
      </div>

      <HomeNavbar isPageLoaded={isLoaded} />
    </main>
  );
}

export default HomePage;

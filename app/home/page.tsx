"use client";

import HomeNavbar from "@/components/ui/HomeNavbar";
import Card from "@/components/ui/Card";
import { spotifyTracks } from "../constants";

function HomePage() {
  return (
    <main className="bg-brand-black fixed inset-0 overflow-hidden p-3.5 sm:p-7">
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

      <HomeNavbar />
    </main>
  );
}

export default HomePage;

"use client";

import CardContainer from "@/components/ui/CardContainer";
import HomeNavbar from "@/components/ui/HomeNavbar";

function HomePage() {
  return (
    <main className="bg-brand-black fixed inset-0 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "url('/images/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />
      <CardContainer />

      <HomeNavbar />
    </main>
  );
}

export default HomePage;

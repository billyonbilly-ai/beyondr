"use client";

import HomeNavbar from "@/components/ui/HomeNavbar";
import Image from "next/image";

function HomePage() {
  return (
    <main className="bg-brand-orange fixed inset-0 overflow-hidden">
      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "url('/images/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="absolute top-3.5 left-3.5 z-10 sm:top-7 sm:left-7">
        <Image
          src="/images/beyondr.svg"
          alt="beyondr logo"
          width={80}
          height={50}
        />
      </div>
      <HomeNavbar />

      {/* Horizontal scroll container */}
      <div className="relative z-10 flex h-full items-center justify-center p-3.5 sm:p-7">
        <div className="scrollbar-hide flex gap-4 overflow-x-auto overflow-y-hidden pb-4">
          {/* Track 1 - L O V E */}
          <div className="h-75 w-100 shrink-0">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1734412743%3Fsecret_token%3Ds-bxt7FPCc5Bn&color=%23fe6847&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>

          {/* Track 2 - HOUDINI */}
          <div className="h-75 w-100 shrink-0">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1750807224%3Fsecret_token%3Ds-8MBku8AcpsO&color=%23fe6847&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>

          {/* Track 7 - 3am */}
          <div className="h-75 w-100 shrink-0">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A837288274&color=%23fe6847&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>

          {/* Track 3 - RIDE */}
          <div className="h-75 w-100 shrink-0">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1662616578%3Fsecret_token%3Ds-YGV77ydarVE&color=%23fe6847&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>

          {/* Track 4 - Moment */}
          <div className="h-75 w-100 shrink-0">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1138027102%3Fsecret_token%3Ds-GZHPv2lMfpY&color=%23fe6847&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>

          {/* Track 5 - FUEGO */}
          <div className="h-75 w-100 shrink-0">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1255188757%3Fsecret_token%3Ds-YUvRrte1cl1&color=%23fe6847&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>

          {/* Track 6 - Player */}
          <div className="h-75 w-100 shrink-0">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A570516849&color=%23fe6847&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;

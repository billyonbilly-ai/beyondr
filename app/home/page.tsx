"use client";

import Button from "@/components/ui/Button";
import HomeNavbar from "@/components/ui/HomeNavbar";
import { latest } from "../constants";
import Image from "next/image";

function HomePage() {
  const { contentType, contentImg, contentUrl, contentCta } = latest;

  return (
    <main className="bg-brand-white h-dvh w-full p-7">
      <HomeNavbar />

      <div className="flex h-full flex-col items-center justify-center gap-5">
        <div className="card-shadow w-max rounded-2xl bg-[#fff5f3] p-2">
          <div className="relative h-86.25 w-86.25">
            <Image
              src={contentImg}
              alt={contentType}
              fill
              className="card-shadow rounded-lg object-contain"
            />
          </div>
        </div>

        <Button
          callback={() => window.open(contentUrl, "_blank", "noreferrer")}
          className="w-full max-w-70"
        >
          {contentCta}
        </Button>
      </div>
    </main>
  );
}

export default HomePage;

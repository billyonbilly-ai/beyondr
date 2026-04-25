"use client";

import Button from "@/components/ui/Button";
import HomeNavbar from "@/components/ui/HomeNavbar";
import { latest } from "../constants";
import Image from "next/image";

function HomePage() {
  const { contentType, contentImg, contentUrl, contentCta } = latest;

  return (
    <main className="bg-brand-white fixed inset-0 overflow-hidden p-3.5 sm:p-7">
      <div className="absolute top-3.5 left-3.5 sm:top-7 sm:left-7">
        <Image
          src="/images/beyondr.svg"
          alt="beyondr logo"
          width={80}
          height={50}
        />
      </div>
      <HomeNavbar />
      <div className="flex h-full flex-col items-center justify-center gap-3 sm:gap-5">
        <div className="card-shadow w-max rounded-2xl bg-[#fff5f3] p-2">
          <div className="relative h-64 w-64 sm:h-86.25 sm:w-86.25">
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
          className="w-full max-w-60"
        >
          {contentCta}
        </Button>
      </div>
    </main>
  );
}

export default HomePage;

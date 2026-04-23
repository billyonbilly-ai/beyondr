"use client";

import Button from "@/components/ui/Button";
import { navLinks } from "../constants";
import { latest } from "../constants";
import Image from "next/image";

function HomePage() {
  const { contentType, contentImg, contentUrl, contentCta } = latest;

  return (
    <main className="bg-brand-white h-dvh w-full p-7">
      <nav className="flex-center flex justify-between gap-3 text-[18px] font-medium lg:justify-end">
        {navLinks.map((link) => (
          <a href={link.to} key={link.link} className="nav-link">
            {link.link}
          </a>
        ))}
      </nav>

      <div>
        <div className="relative h-86.25 w-86.25">
          <Image
            src={contentImg}
            alt={contentType}
            fill
            className="object-contain"
          />
        </div>

        <Button
          callback={() => window.open(contentUrl, "_blank", "noreferrer")}
        >
          {contentCta}
        </Button>
      </div>
    </main>
  );
}

export default HomePage;

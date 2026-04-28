"use client";

import { useState } from "react";
import { navLinks } from "@/app/constants";

interface HomeNavbarProps {
  isPageLoaded: boolean;
}

function HomeNavbar({ isPageLoaded }: HomeNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`bg-brand-black fixed top-0 right-0 bottom-0 z-30 w-[25%] transition-all duration-300 sm:w-40 md:w-35 ${
          isOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`card-shadow fixed right-3.5 bottom-3.5 z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-[#fff5f343] transition-all duration-700 sm:right-7 sm:bottom-7 ${
          isPageLoaded
            ? "translate-x-0 opacity-100"
            : "translate-x-20 opacity-0"
        }`}
        aria-label="Toggle menu"
      >
        <span
          className={`bg-brand-white h-[2.3px] w-6 transition-all duration-300 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`bg-brand-white h-[2.3px] w-6 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`bg-brand-white h-[2.3px] w-6 transition-all duration-300 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      <nav
        className={`fixed right-3.5 bottom-3.5 z-40 flex flex-col items-end gap-3 font-medium transition-all duration-300 sm:right-7 sm:bottom-7 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        style={{ paddingBottom: "60px" }}
      >
        {navLinks.map((link) => (
          <a
            href={link.to}
            key={link.link}
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            {link.link}
          </a>
        ))}
      </nav>
    </>
  );
}

export default HomeNavbar;

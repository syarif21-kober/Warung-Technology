"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">

          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <h1 className="text-3xl font-bold cursor-pointer">
                Wartech.
              </h1>
            </Link>
          </div>

          {/* Menu */}
          <ul
            className={`
              flex items-center gap-12
              md:static
              absolute
              left-1/2
              -translate-x-1/2
              md:translate-x-0
              md:flex-row
              flex-col
              w-full
              md:w-auto
              md:bg-transparent
              bg-slate-700
              md:text-black
              text-white
              md:py-0
              py-10
              transition-all
              duration-300
              z-50
              ${
                active
                  ? "top-24 opacity-100"
                  : "-top-[500px] opacity-0 md:opacity-100"
              }
            `}
          >
            <li>
              <Link
                href="/#beranda"
                onClick={closeMenu}
              >
                Beranda
              </Link>
            </li>

            <li>
              <Link
                href="/#layanan"
                onClick={closeMenu}
              >
                Layanan
              </Link>
            </li>

            <li>
              <Link
                href="/#proyek"
                onClick={closeMenu}
              >
                Proyek
              </Link>
            </li>

            <li>
              <Link
                href="/#kontak"
                onClick={closeMenu}
              >
                Kontak
              </Link>
            </li>

            <li>
              <Link
                href="/chatbot"
                onClick={closeMenu}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Chatbot
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            <i className="ri-menu-3-line ri-2x font-bold"></i>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
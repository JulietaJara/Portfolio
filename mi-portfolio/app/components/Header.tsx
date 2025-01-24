"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./ui/button";
import Image from 'next/image';
import menu from "./images/menu.png";
import close from "./images/menu.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 bg-lilac-100/95 backdrop-blur supports-[backdrop-filter]:bg-lilac-100/60 sticky top-0 z-40 w-full border-b border-lilac-200/40">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold whitespace-nowrap mr-8">
          Julieta Jara
        </Link>

        {/* Botón de menú para móviles */}
        <button
          className="lg:hidden text-lilac-700 hover:text-lilac-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
           <Image
    src={menuOpen ? close.src : menu.src}
    alt="Menu icon"
    width={24} 
    height={24} 
  />
        </button>

        <nav
          className={`${menuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-lilac-50 lg:static lg:bg-transparent lg:block`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 lg:ml-auto p-4 lg:p-0 space-between">
            <li>
              <Button
                variant="ghost"
                className="text-lilac-700 hover:text-lilac-900 hover:bg-lilac-200 w-full lg:w-auto "
                asChild
              >
                <Link href="#projects">Proyectos</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-lilac-700 hover:text-lilac-900 hover:bg-lilac-200 w-full lg:w-auto"
                asChild
              >
                <Link href="#skills">Skills</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-lilac-700 hover:text-lilac-900 hover:bg-lilac-200 w-full lg:w-auto"
                asChild
              >
                <Link href="#about">Sobre mí</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-lilac-700 hover:text-lilac-900 hover:bg-lilac-200 w-full lg:w-auto"
                asChild
              >
                <Link href="#contact">Contacto</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

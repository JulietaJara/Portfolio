import Link from 'next/link';
import Button from './ui/button';

export default function Header() {
    return (
      <header className="py-4 px-6 bg-lilac-100/95 backdrop-blur supports-[backdrop-filter]:bg-lilac-100/60 sticky top-0 z-40 w-full border-b border-lilac-200/40">
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Julieta Jara
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Button variant="ghost" className="text-lilac-700 hover:text-lilac-900 hover:bg-lilac-200" asChild><Link href="#projects">Proyectos</Link></Button></li>
              <li><Button variant="ghost" className="text-lilac-700 hover:text-lilac-900 hover:bg-lilac-200" asChild><Link href="#skills">Habilidades</Link></Button></li>
              <li><Button variant="ghost" className="text-lilac-700 hover:text-lilac-900 hover:bg-lilac-200" asChild><Link href="#about">Sobre mí</Link></Button></li>
              <li><Button variant="ghost" className="text-lilac-700 hover:text-lilac-900 hover:bg-lilac-200" asChild><Link href="#contact">Contacto</Link></Button></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
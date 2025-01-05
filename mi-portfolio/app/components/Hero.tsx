import Button from './ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-lilac-100 to-lilac-200">
      <h1 className="text-4xl font-bold mb-4 text-lilac-900">Hola, soy Julieta</h1>
      <p className="text-xl mb-8 text-lilac-700">Desarrolladora Junior</p>
      
      <Link href="#contact" passHref>
        <Button className="bg-lilac-600 hover:bg-lilac-700 text-white">
          Contáctame
        </Button>
      </Link>
    </section>
  );
}

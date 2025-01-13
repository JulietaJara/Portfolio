import Button from './ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-lilac-100 to-lilac-200">
      <h1 className="text-4xl font-bold mb-4">
        Hola, soy <span style={{ color: 'rgb(110, 1, 166)' }}>Julieta Jara
          <span role="img" aria-label="emoji" className="ml-2">💜</span>
        </span>
      </h1>

      <p className="text-xl mb-8 text-lilac-700">Desarrolladora Junior</p>

      <Link href="https://drive.google.com/file/d/1WApFrVq0NjJh4AvYhnQen7u49yYFyQvm/view?usp=sharing" passHref>
        <Button className="bg-lilac-600 hover:bg-lilac-800 text-white mr-2">
          Mi CV
          <span role="img" aria-label="emoji" className="ml-2">🙂</span>
        </Button>
      </Link>

      <Link href="#Contact" passHref>
        <Button className="bg-lilac-600 hover:bg-lilac-800 text-white">
          Contáctame
          <span role="img" aria-label="emoji" className="ml-2">📩</span>
        </Button>
      </Link>
    </section>
  );
}  

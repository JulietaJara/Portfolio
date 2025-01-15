import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean; 
  href?: string; 
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  asChild,
  href,
  variant = 'primary',
  onClick,
}: ButtonProps) {
  const variantClass =
    variant === 'primary'
      ? 'bg-lilac-600 hover:bg-lilac-700 text-white'
      : variant === 'secondary'
      ? 'bg-lilac-100 text-lilac-700'
      : 'bg-transparent text-lilac-700 border border-lilac-700';

  if (asChild && href) {
    return (
      <Link href={href} passHref>
        <a className={`px-4 py-2 rounded-full font-semibold ${variantClass} ${className}`}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-semibold ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}

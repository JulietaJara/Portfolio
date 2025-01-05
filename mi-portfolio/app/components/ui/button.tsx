import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
    variant?: 'primary' | 'secondary' | 'ghost';  
  }
  
  export default function Button({ children, className, asChild, variant = 'primary' }: ButtonProps) {
    const Component = asChild ? 'a' : 'button';
  
    const variantClass = variant === 'primary' 
      ? 'bg-lilac-600 hover:bg-lilac-700 text-white' 
      : variant === 'secondary'
      ? 'bg-lilac-100 text-lilac-700'
      : 'bg-transparent text-lilac-700 border border-lilac-700'; 
  
    return (
      <Component className={`px-4 py-2 rounded-md font-semibold ${variantClass} ${className}`}>
        {children}
      </Component>
    );
  }
  



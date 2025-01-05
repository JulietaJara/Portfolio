import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const badgeClass = variant === 'primary' 
    ? 'bg-lilac-600 text-white' 
    : 'bg-lilac-100 text-lilac-700';

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${badgeClass} ${className}`}>
      {children}
    </span>
  );
}

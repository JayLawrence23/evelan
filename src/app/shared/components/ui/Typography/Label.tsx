import { cn } from '@/utils/utils';
import react, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  name: string;
  className?: string;
};

export function Label({ children, name, className }: Props) {
  return (
    <label
      htmlFor={name}
      className={cn(
        className,
        'font-sm mb-2 block scroll-m-20 text-sm font-medium tracking-tight text-gray-700 dark:text-white'
      )}
    >
      {children}
    </label>
  );
}

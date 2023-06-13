import { VariantProps, cva } from 'class-variance-authority';
import react, { ReactNode } from 'react';

const heading = cva(
  'scroll-m-20 text-text-lg lg:text-xl font-medium tracking-tigh',
  {
    variants: {
      variant: {
        primary: '',
        secondary: 'text-gray-700/70 dark:text-white',
        black: 'text-black',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface Props extends VariantProps<typeof heading> {
  children: ReactNode;
}

export function TypographyH4({ children, variant }: Props) {
  return <h4 className={heading({ variant })}>{children}</h4>;
}

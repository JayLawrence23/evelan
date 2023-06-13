import { VariantProps, cva } from 'class-variance-authority';
import react, { ReactNode } from 'react';

const heading = cva('scroll-m-20 text-2xl font-semibold tracking-tight', {
  variants: {
    variant: {
      primary: '',
      secondary: 'text-gray-500',
      black: 'text-black',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface Props extends VariantProps<typeof heading> {
  children: ReactNode;
}

export function TypographyH3({ children, variant }: Props) {
  return <h3 className={heading({ variant })}>{children}</h3>;
}

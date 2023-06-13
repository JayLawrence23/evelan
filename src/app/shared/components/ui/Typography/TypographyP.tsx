import react, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function TypographyP({ children }: Props) {
  return <h3 className="leading-7 [&:not(:first-child)]:mt-6">{children}</h3>;
}

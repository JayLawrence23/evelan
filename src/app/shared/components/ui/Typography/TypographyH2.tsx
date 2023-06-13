import react, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function TypographyH2({ children }: Props) {
  return (
    <h3 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
      {children}
    </h3>
  );
}

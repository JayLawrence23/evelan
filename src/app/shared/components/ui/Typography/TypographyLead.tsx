import react, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function TypographyLead({ children }: Props) {
  return (
    <h3 className="text-xl text-slate-700 dark:text-slate-400">{children}</h3>
  );
}

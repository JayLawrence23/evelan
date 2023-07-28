import { ReactNode } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => (
  <div className='mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
    {children}
  </div>
);

export default CardContainer;

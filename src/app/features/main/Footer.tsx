import React from 'react';
import { TypographySubtle } from '@/components/ui/Typography';

const Footer = () => {
  return (
    <header className='my-6 rounded-md bg-gray-100 p-4 text-gray-900'>
      <TypographySubtle>
        Contact Me:{' '}
        <a href='mailto:jaydimaano@proton.me'> jaydimaano@proton.me</a>
      </TypographySubtle>
    </header>
  );
};

export default Footer;

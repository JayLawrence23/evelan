import React from 'react';
import { TypographySubtle } from '@/components/ui/Typography';

const Footer = () => {
  return (
    <header className='my-6 flex justify-around rounded-md bg-gray-100 p-4 text-gray-900'>
      <TypographySubtle>
        Contact Me:{' '}
        <a href='mailto:jaydimaano@proton.me'> jaylawrencedimaano@gmail.com</a>
      </TypographySubtle>

      <TypographySubtle>
        Github Link:{' '}
        <a
          href='https://github.com/JayLawrence23/evelan'
          target='_blank'
          className='hover:underline'
        >
          here
        </a>{' '}
      </TypographySubtle>
    </header>
  );
};

export default Footer;

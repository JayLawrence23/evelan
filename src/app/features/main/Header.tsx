import React from 'react';
import { TypographyH4 } from '@/components/ui/Typography';

const Header = () => {
  return (
    <header className='rounded-md bg-gray-700 p-4 text-white'>
      <TypographyH4>List of Users</TypographyH4>
    </header>
  );
};

export default Header;

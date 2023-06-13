'use client';

import 'client-only';

import { Button } from '@/components/ui';
import React from 'react';

type Props = {
  disabled: boolean;
  pagination: number;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
};

const LoadMore = ({ pagination, setPagination, disabled }: Props) => {
  return (
    <div className='mt-8 flex justify-center'>
      <Button
        disableButton={disabled}
        disabled={disabled}
        onClick={() => setPagination(pagination + 1)}
      >
        {disabled ? 'No more user' : 'Load More'}
      </Button>
    </div>
  );
};

export default LoadMore;

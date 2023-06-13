import React from 'react';

export const CardSkeleton = () => {
  return (
    <div className='m-6 flex flex-col items-center justify-center rounded-md bg-gray-100 p-6'>
      <div className='my-4 h-12 w-12 animate-pulse rounded-full bg-gray-50'></div>
      <div className='my-2 flex w-full flex-col items-center'>
        <div className='h-5 w-10 animate-pulse rounded-md bg-gray-50'></div>
        <div className='mt-2 h-5 w-full animate-pulse rounded-md bg-gray-50'></div>
        <div className='mt-2 h-5 w-full animate-pulse rounded-md bg-gray-50'></div>
      </div>
    </div>
  );
};
export const CardSkeletonGroup = ({ count }: { count: number }) => {
  const skeletons = Array.from({ length: count });

  return (
    <>
      {skeletons.map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </>
  );
};

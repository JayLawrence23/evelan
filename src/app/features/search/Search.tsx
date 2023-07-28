"use client";

import React, { ChangeEvent, FC, useCallback } from "react";
import { useRouter } from "next/navigation";
import debounce from "lodash/debounce";

const Search: FC = () => {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce(
      (e: ChangeEvent<HTMLInputElement>) =>
        router.push(`/?search=${e.target.value}`),
      500
    ),
    []
  );

  return (
    <div className='mt-8 flex flex-col'>
      <label htmlFor='search'>Search:</label>
      <input
        name='search'
        className='rounded-md border border-gray-200 p-2'
        type='text'
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;

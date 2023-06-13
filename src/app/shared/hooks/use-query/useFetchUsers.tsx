import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchUsers } from '@/api/services/user';
import { useUserStore } from '@/store/useUserStore';
import { User, UserResult } from '@/types/user';

interface FetchUsersHook {
  pagination: number;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  disabled: boolean;
  isLoading: boolean;
  isError: boolean;
  users: User[];
}

export const useFetchUsers = (): FetchUsersHook => {
  const [pagination, setPagination] = useState<number>(1);

  const { users, addUser } = useUserStore();

  const { data, isLoading, isError } = useQuery<UserResult | undefined>({
    queryKey: ['user', pagination],
    queryFn: async () => {
      const result = await fetchUsers(pagination);

      addUser(result.data);

      return result;
    },
  });

  const disabled = users?.length === data?.total;

  return {
    pagination,
    setPagination,
    disabled,
    isLoading,
    isError,
    users,
  };
};

import { http } from '@/api/adapters';
import { UserResult } from '@/types/user';

export const fetchUsers = async (page: number): Promise<UserResult> => {
  const result = await http.get(`/api/users?page=${page}`);

  const data = result.data;

  return data as UserResult;
};
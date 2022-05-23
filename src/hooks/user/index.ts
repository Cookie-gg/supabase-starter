import useSWR from 'swr';
import { User } from '~/domain/user';
import { supbase } from '~/libs/supabase';

const getUsers = async () => {
  const { data, error } = await supbase.from<User>('user').select('*');
  if (error) {
    throw error;
  }
  return data;
};

export const useUser = () => {
  const { data: users } = useSWR('users', getUsers, { revalidateOnFocus: false });

  return { users };
};

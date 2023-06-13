import { create } from 'zustand';
import { Draft, produce } from 'immer';
import { User } from '@/types/user';


type UserStore = {
  users: User[];
};

type UserAction = {
  addUser: (user: User[]) => void;
  resetData: () => void;
};

const initialState: UserStore = {
  users: []
};

export const useUserStore = create<UserStore & UserAction>((set) => ({
  ...initialState,

  // *** Update the user array
  addUser: (user) =>
    set(
      produce((state: Draft<UserStore>) => {
        user.forEach((user) => {
          const existingUserIndex = state.users.findIndex((u) => u.id === user.id);
          if (existingUserIndex === -1) {
            // *** Only push the user if it doesn't exist in the array
            state.users.push(user);
          } else {
            // *** If the user already exists, update it in the array
            state.users[existingUserIndex] = user;
          }
        });
      })
    ),

  // *** Reset the data array (for future purposes)
  resetData: () => set(initialState),
}));

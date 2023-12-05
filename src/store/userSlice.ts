import { UserDTO } from "types/api";
import { StateCreator } from "zustand";

export interface UserSlice {
  user: UserDTO | null;
  login: (user: UserDTO) => void;
  logout: () => void;
}

const initialState = null;

const userSlice: StateCreator<UserSlice> = (set) => ({
  user: initialState,
  login: (user) => set((state) => ({ ...state, user })),
  logout: () => set((state) => ({ ...state, user: initialState })),
});

export default userSlice;

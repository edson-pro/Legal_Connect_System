import { create } from "zustand";
import userSlice, { UserSlice } from "./userSlice";

const useStore = create<UserSlice>((...a) => ({
  ...userSlice(...a),
}));

export default useStore;

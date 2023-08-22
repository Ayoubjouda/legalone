import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  accessToken: string | null;
  currentUser: currentUser | null;
  refreshToken: string | null;
  setCurrentUser: (currentUser: currentUser | null) => void;
  setToken: (token: string | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
}

const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      currentUser: null,
      refreshToken: null,
      setCurrentUser: (currentUser: currentUser | null) =>
        set(() => ({ currentUser: currentUser })),
      setToken: (accessToken: string | null) =>
        set(() => ({ accessToken: accessToken })),
      setRefreshToken: (refreshToken: string | null) =>
        set(() => ({ refreshToken: refreshToken })),
    }),
    {
      name: 'localStorage', // unique name
      // (optional) by default, 'localStorage' is used
    }
  )
);
export default useAppStore;

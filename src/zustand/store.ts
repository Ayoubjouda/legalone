import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Formality, OrderType } from '@/types/order';
interface AppState {
  accessToken: string | null;
  currentUser: currentUser | null;
  refreshToken: string | null;
  activeStep: number;
  isSidebarOpen: boolean;
  Order: OrderType | null;
  formality: Formality;
  setCurrentUser: (currentUser: currentUser | null) => void;
  setToken: (token: string | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
  setActiveStep: (stepNumber: number) => void;
  setOrder: (order: OrderType) => void;
  setSideBarState: (isSidebarOpen: boolean) => void;
  setFormality: (formality: Formality) => void;
}

const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      currentUser: null,
      refreshToken: null,
      activeStep: 0,
      Order: null,
      isSidebarOpen: false,
      formality: null,

      setCurrentUser: (currentUser: currentUser | null) =>
        set(() => ({ currentUser: currentUser })),
      setToken: (accessToken: string | null) =>
        set(() => ({ accessToken: accessToken })),
      setRefreshToken: (refreshToken: string | null) =>
        set(() => ({ refreshToken: refreshToken })),
      setActiveStep: (stepNumber: number) =>
        set(() => ({ activeStep: stepNumber })),
      setOrder: (order: OrderType) => set(() => ({ Order: order })),
      setSideBarState: (isSideBarOpen: boolean) =>
        set(() => ({ isSidebarOpen: isSideBarOpen })),
      setFormality: (formality: Formality) =>
        set(() => ({ formality: formality })),
    }),
    {
      name: 'localStorage', // unique name
      // (optional) by default, 'localStorage' is used
    }
  )
);
export default useAppStore;

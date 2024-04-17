/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeType = "light" | "dark";

interface MyState {
  custom: boolean;
  theme: ThemeType;
  setCustomTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<MyState>()(
  persist(
    (set, _get) => ({
      custom: false,
      theme: "light",
      setCustomTheme: (theme: ThemeType) => {
        set({ custom: true, theme });
      },
    }),
    {
      name: "theme-storage",
    }
  )
);

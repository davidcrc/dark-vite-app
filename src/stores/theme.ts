/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeType = "light" | "dark";

interface MyState {
  custom: boolean;
  theme: ThemeType;
  switchTheme: (theme: ThemeType) => void;
  setCustomTheme: (customTheme: ThemeType) => void;
}

export const useThemeStore = create<MyState>()(
  persist(
    (set, _get) => ({
      custom: false,
      theme: "light",
      switchTheme: (theme) => {
        set(() => ({ theme }));
      },
      setCustomTheme: (customTheme: ThemeType) => {
        set({
          custom: true,
          theme: customTheme,
        });
      },
    }),
    {
      name: "theme-storage",
    }
  )
);

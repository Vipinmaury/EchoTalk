import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("echotalk-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("echotalk-theme", theme);
    set({ theme });
  },
}));

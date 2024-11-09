import { createContext, useContext } from 'react';

export const THEME = {
  brown: 'brown',
  slate: 'slate',
  black: 'black',
}

export const themeContext = createContext();

export function useTheme() {
  return useContext(themeContext);
}

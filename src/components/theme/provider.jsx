import { useLayoutEffect, useState } from 'react';
import { THEME, themeContext } from './context';
import PropTypes from 'prop-types';

export default function ThemeProvider({ children, initialTheme = THEME.brown }) {
  const [theme, setTheme] = useState(initialTheme);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialTheme: PropTypes.oneOf(Object.values(THEME)),
};

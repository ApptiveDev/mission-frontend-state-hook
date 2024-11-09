import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Timer from './pages/timer';
import ThemeProvider from './components/theme/provider';
import { THEME } from './components/theme/context';
import Footer from './components/footer/footer';
import ThemeChanger from './components/theme/changer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider initialTheme={THEME.brown}>
      <ThemeChanger />
      <Timer />
      <Footer />
    </ThemeProvider>
  </StrictMode>,
);

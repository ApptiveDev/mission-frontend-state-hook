import { useEffect, useState } from 'react';
import { Tab, TabContainer } from '../tab';
import { useTheme } from './context';
import styles from './styles.module.css';
import { capitalize } from '../../utilities/capitalize';

const themes = ['brown', 'slate', 'black'];

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [index, setIndex] = useState(themes.indexOf(theme));

  useEffect(() => {
    setTheme(themes[index]);
  }, [index, setTheme]);

  return (
    <header className={styles.header}>
      <TabContainer index={index} onChange={setIndex}>
        {themes.map((theme, i) => (
          <Tab key={i} active={i === index}>
            {capitalize(theme)}
          </Tab>
        ))}
      </TabContainer>
    </header>
  );
}

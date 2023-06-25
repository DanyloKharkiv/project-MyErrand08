import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/theme/themeSlice';

const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Violet', value: 'violet' },
];

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('violet');

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  const handleThemeToggle = (theme) => {
    dispatch(setTheme(theme));
    setSelectedTheme(theme);
    setIsSelectOpen(false);
  };

  return (
    <div isOpen={isSelectOpen}>
      <div onClick={() => setIsSelectOpen(!isSelectOpen)}>
        <p>Theme</p>
      </div>
      <ul isOpen={isSelectOpen}>
        {themes.map(({ value, name }) => (
          <li key={value} onClick={() => handleThemeToggle(value)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelect;

import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export function Theme() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const lightTheme = createTheme({
    palette: {
        primary: {
          main: '#D9D9D9',
        },
        secondary: {
          main: '#FFFFFF',
        },
        header: {
          main: '#FCFCFC',
        },
        needHelp: {
            main: 'F6F6F7',
        },
        text: {
          primary: '#161616',
          secondary: '#6C757D',
          accent: 'BEDBB0',
        },
      },
  });

  const darkTheme = createTheme({
    
  });

  const violetTheme = createTheme({
    
  });

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : currentTheme === 'dark' ? darkTheme : violetTheme}>
      <button onClick={() => handleThemeChange('light')}>Light</button>
      <button onClick={() => handleThemeChange('dark')}>Dark</button>
      <button onClick={() => handleThemeChange('violet')}>Violet</button>
    </ThemeProvider>
  );
}


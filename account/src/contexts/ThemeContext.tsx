
import React, { createContext, useContext, useState, useEffect } from 'react';

type ColorScheme = 'blue' | 'green' | 'purple' | 'red';

interface ThemeContextType {
  isDarkMode: boolean;
  colorScheme: ColorScheme;
  toggleTheme: () => void;
  setColorScheme: (scheme: ColorScheme) => void;
  theme: string; // Adding theme property
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedColorScheme = localStorage.getItem('colorScheme') as ColorScheme;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const handleSetColorScheme = (scheme: ColorScheme) => {
    setColorScheme(scheme);
    localStorage.setItem('colorScheme', scheme);
  };

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      colorScheme,
      toggleTheme,
      setColorScheme: handleSetColorScheme,
      theme: isDarkMode ? 'dark' : 'light' // Adding theme property
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

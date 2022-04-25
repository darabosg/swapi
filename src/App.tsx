import React, { useState, useMemo } from 'react';
import { HashRouter, Route, Navigate, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Character from './pages/Character/Character';
import Home from './pages/Home/Home';
import Species from './pages/Species/Species';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import ColorModeContext from './contexts/ColorMode';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  // const colorContext = useContext(ColorModeContext)
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/:page" element={<Home />} />
            <Route path="species/:id" element={<Species />} />
            <Route path="character/:id" element={<Character />} />
            <Route path="*" element={<Navigate replace to="/1" />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


import { StrictMode, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import App from './App';
import { createRoot } from 'react-dom/client';

function Main() {
  const [mode, setMode] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  const theme = useMemo(() => createTheme({
    palette: { mode },
  }), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)

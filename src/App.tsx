

import type { FC, ChangeEvent } from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, Box, TextField, Button, Paper, Fade } from '@mui/material';

import { Stack } from '@mui/material'; // Added Stack import
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const CARD_VALUES = [1, 2, 3, 5, 8, 13, '?'];

interface AppProps {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
}

const App: FC<AppProps> = ({ mode, setMode }) => {
  const [name, setName] = useState('');
  const [selected, setSelected] = useState<number | string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleCardClick = (val: number | string) => setSelected(val);
  const handleReveal = () => setRevealed((r) => !r);
  const handleReset = () => {
    setSelected(null);
    setRevealed(false);
    setName('');
  };

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Planning Poker
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Switch checked={mode === 'dark'} onChange={() => setMode(mode === 'light' ? 'dark' : 'light')} />
        </Toolbar>
      </AppBar>
      <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center" px={2}>
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 480, p: 3, mt: 4 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: { xs: 2, sm: 3 } }}
          >
            <TextField
              label="Your Name"
              value={name}
              onChange={handleNameChange}
              fullWidth
              variant="outlined"
              size="small"
              inputProps={{ maxLength: 32 }}
              autoFocus
              sx={{ minWidth: { xs: '100%', sm: 180 } }}
            />
            <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color={revealed ? 'secondary' : 'primary'}
                  onClick={handleReveal}
                  disabled={selected === null}
                  sx={{ minWidth: 100, mr: 1 }}
                >
                  {revealed ? 'Hide' : 'Reveal'}
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleReset}
                  sx={{ minWidth: 80 }}
                >
                  Reset
                </Button>
              </Box>
            </Stack>
            <Box
              mt={2}
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              gap={{ xs: 1.5, sm: 2 }}
              sx={{
                rowGap: { xs: 1.5, sm: 2 },
                columnGap: { xs: 1.5, sm: 2 },
                mb: { xs: 2, sm: 3 },
              }}
            >
              {CARD_VALUES.map((val) => (
                <Fade in={true} key={val}>
                  <Paper
                    elevation={selected === val ? 8 : 2}
                    onClick={() => handleCardClick(val)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={selected === val}
                    sx={{
                      width: { xs: 56, sm: 64 },
                      height: { xs: 80, sm: 96 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: { xs: 28, sm: 32 },
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: selected === val ? '3px solid #1976d2' : '2px solid transparent',
                      background: selected === val ? 'rgba(25, 118, 210, 0.08)' : 'inherit',
                      transition: 'all 0.2s cubic-bezier(.4,2,.6,1)',
                      boxShadow: selected === val ? '0 0 12px 2px #1976d244' : undefined,
                      transform: selected === val ? 'scale(1.08)' : 'scale(1)',
                      userSelect: 'none',
                      animation: selected === val ? 'cardPop 0.18s cubic-bezier(.4,2,.6,1)' : undefined,
                      outline: 'none',
                      '&:hover': {
                        boxShadow: '0 0 16px 4px #1976d255',
                        borderColor: '#1565c0',
                      },
                      '&:focus-visible': {
                        borderColor: '#1976d2',
                        boxShadow: '0 0 0 3px #1976d288',
                      },
                      '@keyframes cardPop': {
                        '0%': { transform: 'scale(1)' },
                        '60%': { transform: 'scale(1.15)' },
                        '100%': { transform: 'scale(1.08)' },
                      },
                    }}
                  >
                    {selected === val ? (revealed ? val : '') : val}
                  </Paper>
                </Fade>
              ))}
            </Box>
        </Paper>
      </Box>
      <Box py={2} textAlign="center">
        <Typography variant="caption" color="text.secondary">
          &copy; {new Date().getFullYear()} Planning Poker
        </Typography>
      </Box>
    </Box>
  );
};

export default App;

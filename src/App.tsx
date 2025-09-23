import type { ChangeEvent, FC } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import "./AppCustom.css";

import Header from "./components/Header";
import NameInput from "./components/NameInput";
import CardGrid from "./components/CardGrid";
import Controls from "./components/Controls";

import { Global, css } from "@emotion/react";

interface AppProps {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

const App: FC<AppProps> = ({ mode, setMode }) => {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState<number | string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleCardClick = (value: number | string) => setSelected(value);
  const handleReveal = () => setRevealed((value) => !value);
  const handleReset = () => {
    setSelected(null);
    setRevealed(false);
    setName("");
  };

  return (
    <>
      <Global
        styles={css`
          @keyframes cardPop {
            0% {
              transform: scale(1);
            }
            60% {
              transform: scale(1.15);
            }
            100% {
              transform: scale(1.08);
            }
          }
        `}
      />
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header mode={mode} setMode={setMode} />
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={2}
        >
          <Paper
            elevation={3}
            sx={{ width: "100%", maxWidth: 480, p: 3, mt: 4 }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ mb: { xs: 2, sm: 3 } }}
            >
              <NameInput name={name} onChange={handleNameChange} />
              <Controls
                revealed={revealed}
                canReveal={selected !== null}
                onReveal={handleReveal}
                onReset={handleReset}
              />
            </Stack>
            <CardGrid
              selected={selected}
              revealed={revealed}
              onSelect={handleCardClick}
            />
          </Paper>
        </Box>
        <Box py={2} textAlign="center">
          <span style={{ color: "var(--mui-palette-text-secondary)" }}>
            &copy; {new Date().getFullYear()} Planning Poker
          </span>
        </Box>
      </Box>
    </>
  );
};

export default App;

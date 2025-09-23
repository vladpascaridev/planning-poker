import { AppBar, Toolbar, Typography, IconButton, Switch } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface HeaderProps {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

export default function Header({ mode, setMode }: HeaderProps) {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Planning Poker
        </Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          color="inherit"
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Switch
          checked={mode === "dark"}
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
        />
      </Toolbar>
    </AppBar>
  );
}

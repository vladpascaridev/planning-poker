import { Box, Button } from "@mui/material";

interface ControlsProps {
  revealed: boolean;
  canReveal: boolean;
  onReveal: () => void;
  onReset: () => void;
}

export default function Controls({
  revealed,
  canReveal,
  onReveal,
  onReset,
}: ControlsProps) {
  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="contained"
        color={revealed ? "secondary" : "primary"}
        onClick={onReveal}
        disabled={!canReveal}
        sx={{ minWidth: 100, mr: 1 }}
      >
        {revealed ? "Hide" : "Reveal"}
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        onClick={onReset}
        sx={{ minWidth: 80 }}
      >
        Reset
      </Button>
    </Box>
  );
}

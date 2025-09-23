import type { SxProps, Theme } from "@mui/material";

export const cardPaperSx: SxProps<Theme> = {
  width: { xs: 56, sm: 64 },
  height: { xs: 80, sm: 96 },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: { xs: 28, sm: 32 },
  fontWeight: 600,
  cursor: "pointer",
  border: "2px solid transparent",
  transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
  userSelect: "none",
  outline: "none",
  "&:hover": {
    boxShadow: "0 0 16px 4px #1976d255",
    borderColor: "#1565c0",
  },
  "&:focus-visible": {
    borderColor: "#1976d2",
    boxShadow: "0 0 0 3px #1976d288",
  },
};

export const cardPaperSelectedSx: SxProps<Theme> = {
  border: "3px solid #1976d2",
  background: "rgba(25, 118, 210, 0.08)",
  boxShadow: "0 0 12px 2px #1976d244",
  transform: "scale(1.08)",
  animation: "cardPop 0.18s cubic-bezier(.4,2,.6,1)",
};

import { TextField } from "@mui/material";
import type { ChangeEvent } from "react";

interface NameInputProps {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function NameInput({ name, onChange }: NameInputProps) {
  return (
    <TextField
      label="Your Name"
      value={name}
      onChange={onChange}
      fullWidth
      variant="outlined"
      size="small"
      autoFocus
      sx={{ minWidth: { xs: "100%", sm: 180 } }}
    />
  );
}

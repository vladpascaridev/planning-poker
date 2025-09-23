import { Box, Paper, Fade } from "@mui/material";
import { cardPaperSx, cardPaperSelectedSx } from "./styles";

export const CARD_VALUES = [1, 2, 3, 5, 8, 13, "?"];

interface CardGridProps {
  selected: number | string | null;
  revealed: boolean;
  onSelect: (val: number | string) => void;
}

export default function CardGrid({
  selected,
  revealed,
  onSelect,
}: CardGridProps) {
  return (
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
            onClick={() => onSelect(val)}
            tabIndex={0}
            role="button"
            sx={
              selected === val
                ? {
                    ...(cardPaperSx as object),
                    ...(cardPaperSelectedSx as object),
                  }
                : (cardPaperSx as object)
            }
          >
            {selected === val ? (revealed ? val : "") : val}
          </Paper>
        </Fade>
      ))}
    </Box>
  );
}

import { Box } from "@mui/material";
import Square from "./Square"
import type { SquareName } from "../types/chess";
import { useState } from "react";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;
const ranks = [8, 7, 6, 5, 4, 3, 2, 1] as const;

function Board() {

  const [SelectedSquare, setSelectedSquare] = useState<SquareName | null>(null);

  function handleSquareClick(name: SquareName) {
    setSelectedSquare(name);
  }


  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        width: "100%",
        maxWidth: 560,
      }}
    >
      {ranks.map((rank, rowIndex) =>
        files.map((file, columnIndex) => (
          <Square
            key={`${file}${rank}`}
            name={`${file}${rank}`}
            dark={(rowIndex + columnIndex) % 2 === 1}
            selected={SelectedSquare === `${file}${rank}`}
            onClick={handleSquareClick}
          />
        ))
      )}
    </Box>
  );
}

export default Board
import { Box } from "@mui/material";
import Square from "./Square"
import type { SquareName, Position, FenPiece } from "../types/chess";
import { useState } from "react";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;
const ranks = [8, 7, 6, 5, 4, 3, 2, 1] as const;
const fen = "8/5k2/3p4/1p1Pp2p/pP2Pp1P/P4P1K/8/8 b - - 99 50"

const pieceImages: Record<FenPiece, string> = {
  p: "/pieces/PawnBlack.svg",
  P: "/pieces/PawnWhite.svg",
  b: "/pieces/BishopBlack.svg",
  B: "/pieces/BishopWhite.svg",
  n: "/pieces/KnightBlack.svg",
  N: "/pieces/KnightWhite.svg",
  q: "/pieces/QueenBlack.svg",
  Q: "/pieces/QueenWhite.svg",
  k: "/pieces/KingBlack.svg",
  K: "/pieces/KingWhite.svg",
  r: "/pieces/RookBlack.svg",
  R: "/pieces/RookWhite.svg",
}

function Board() {

  const [SelectedSquare, setSelectedSquare] = useState<SquareName | null>(null);

  function handleSquareClick(name: SquareName) {
    setSelectedSquare(name);
  }

  function renderBoard() {
    const position = parseFen(fen);

    return ranks.map((rank, rowIndex) =>
      files.map((file, columnIndex) => {
        const name: SquareName = `${file}${rank}`;
        const piece = position[name];

        return (
          <Square
            key={name}
            name={name}
            dark={(rowIndex + columnIndex) % 2 === 1}
            selected={SelectedSquare === name}
            onClick={handleSquareClick}
            image={piece ? pieceImages[piece] : undefined}
          />
        );
      })
    );
  }

  function parseFen(fen: string): Position {

    const positionFen = fen.trim().split(/\s+/)[0]
    const ranksFen = positionFen.split("/")
    const position: Position = {};

    ranksFen.forEach((rankText, rowIndex) => {

      const rank = 8 - rowIndex;
      let fileIndex = 0;

      for (const char of rankText) {
        if ("12345678".includes(char)) {
          fileIndex += Number(char);
        }
        else {
          const square = `${files[fileIndex]}${rank}` as SquareName;
          position[square] = char as FenPiece;
          fileIndex += 1;
        }
      }
    })
    return position
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
      {renderBoard()}
    </Box>
  );
}

export default Board
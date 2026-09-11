import Board from "../components/board"
import { Box } from "@mui/material";

function GamePage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        p: 3,
        boxSizing: "border-box",
      }}
    >
      <Board />
    </Box>
  )
}

export default GamePage
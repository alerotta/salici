import Board from "../components/board"
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

function GamePage() {
  const navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          p: 3,
          boxSizing: "border-box",
        }}
      >
        <Board color="b" />

      </Box>
      <Button
        variant="contained"
        onClick={() => navigate("/")}>
        homepage
      </Button>
    </>
  )
}

export default GamePage
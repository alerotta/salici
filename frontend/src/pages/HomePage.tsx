import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router";

function HomePage() {

  const navigate = useNavigate();

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
      <Button
        variant="contained"
        onClick={() => navigate("/game")}> Game </Button>
    </Box>
  )
}
export default HomePage
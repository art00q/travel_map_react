import { Box, CircularProgress } from "@mui/material";

function Spinner() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CircularProgress />
    </Box>
  )
}

export default Spinner;

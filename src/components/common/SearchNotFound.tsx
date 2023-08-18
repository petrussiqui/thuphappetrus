import PropTypes from "prop-types";
// material
import { Box, Typography } from "@mui/material";

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string,
};

export default function SearchNotFound({ searchQuery = "", ...other }) {
  return (
    <Box
      {...other}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "300px",
      }}
    >
      <Typography gutterBottom align="center" variant="h6">
        Not found
      </Typography>
      <Typography variant="body2" align="center">
        No results found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or
        using complete words.
      </Typography>
    </Box>
  );
}

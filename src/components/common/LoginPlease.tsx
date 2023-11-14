import PropTypes from "prop-types";
// material
import { Box, Typography } from "@mui/material";
import { ButtonLoadingSecondary } from "./CustomButton";
import { Link } from "react-router-dom";

// ----------------------------------------------------------------------

LoginPlease.propTypes = {
  searchQuery: PropTypes.string,
};

export default function LoginPlease({ searchQuery = "", ...other }) {
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
        Login please!
      </Typography>
      <Typography variant="body2" align="center" mb={2}>
        Login to your accounts to use this feature
      </Typography>
      <Link to="/login">
        <ButtonLoadingSecondary>Go to Log in</ButtonLoadingSecondary>
      </Link>
    </Box>
  );
}

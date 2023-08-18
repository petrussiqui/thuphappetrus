import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx = {} }) {
  const logo = (
    <Box component="img" src={"/logo.png"} sx={{ ...sx, maxWidth: "100%" }} />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <RouterLink
      to="/"
      className="logo"
      style={{ display: "flex", alignItems: "center" }}
    >
      {logo}
    </RouterLink>
  );
}

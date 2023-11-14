import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

LogoText.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function LogoText({ disabledLink = false, sx = {} }) {
  const logo = (
    <Box
      component='img'
      src={"/logo-text.png"}
      sx={{ ...sx, maxWidth: "100%" }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <RouterLink
      to='/'
      className='logo'
      style={{ display: "flex", alignItems: "center" }}>
      {logo}
    </RouterLink>
  );
}

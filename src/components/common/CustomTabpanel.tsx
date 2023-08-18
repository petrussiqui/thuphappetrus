import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
// ----------------------------------------------------------------------

CustomTabpanel.propTypes = {
  props: PropTypes.any,
};

export default function CustomTabpanel({ props }: any) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

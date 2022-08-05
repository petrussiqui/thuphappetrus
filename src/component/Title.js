// @mui
import { Typography } from '@mui/material';
import useResponsive from "../hook/useResponsive";

export default function Title({ children, variant, sx, width, ...other }) {
  var isDesktop = useResponsive('up', 'sm');
  return (
    <Typography
      {...other}
      variant={variant ? variant : "h3"}
      sx={{
        background:
          "-webkit-linear-gradient(0deg, #79E9ED, #F080E5 )",
        "WebkitBackgroundClip": "text",
        "WebkitTextFillColor": "transparent",
        width: width ? width : (isDesktop ? "fit-content" : "100%"),
        textAlign: "center",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}

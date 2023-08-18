import { Box, Stack, styled } from "@mui/material";
import Slider from "react-slick";

export const SectionBoxFirst = styled(Box)(({ theme }) => ({
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(6),
  },
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  minHeight: "50vh",
  paddingTop: theme.spacing(18),
  paddingBottom: theme.spacing(14),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(6),
  },
}));

//Intro
export const IntroTitleBox = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const ImgAccent = styled("img")(({ theme }) => ({
  position: "absolute",
}));

export const IntroContentBox = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  marginTop: theme.spacing(7),
  " .MuiBox-root": {
    marginRight: theme.spacing(8),
  },

  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    marginTop: theme.spacing(4),
    " .MuiBox-root": {
      marginRight: theme.spacing(4),
    },
  },
}));

export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  margin: theme.spacing(3, 0, 2, 0),
  " img": {
    marginRight: theme.spacing(5),
    transition: "0.5s",
  },
  " img:hover": {
    transform: "scale(1.05)",
    transition: "0.5s",
  },
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2, 0, 2, 0),
    " img": {
      marginRight: theme.spacing(2),
    },
  },
}));
export const BuyOnGroup = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  margin: theme.spacing(2, 0, 2, 0),
  " button": {
    marginRight: theme.spacing(2),
    padding: theme.spacing(1, 3),
  },
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2, 0, 2, 0),
    " button": {
      marginRight: theme.spacing(2),
    },
  },
}));

export const CertikBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2, 3, 1),
  color: "white",
  borderRadius: "10px",
  background: "var(--linear-primary-10)",
  border: "1px solid var(--color-secondary)",
  minWidth: "300px",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2),
    gap: theme.spacing(1),
    margin: theme.spacing(0),
  },
}));
export const TotalBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.5),
  padding: theme.spacing(1, 3),
  color: "white",
  borderRadius: "15px",
  background: "transparent",
  border: "1px solid var(--color-secondary)",
  width: "300px",
  maxWidth: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2),
    gap: theme.spacing(1),
    margin: theme.spacing(0),
  },
}));
export const BurnedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(0.5),
  padding: theme.spacing(2, 3),
  color: "white",
  borderRadius: "15px",
  background: "var(--linear-primary-10)",
  width: "345px",
  maxWidth: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2),
    gap: theme.spacing(1),
    margin: theme.spacing(0),
  },
}));
export const HolderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(0.5),
  padding: theme.spacing(2, 3),
  borderRadius: "15px",
  background: "var(--linear-primary)",
  color: "var(--color-accent)",
  width: "345px",
  maxWidth: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2),
    gap: theme.spacing(1),
    margin: theme.spacing(0),
  },
}));
export const ContractBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1, 0, 1, 0),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.5),
  padding: theme.spacing(2, 3),
  borderRadius: "20px 0 20px 0",
  background: "var(--color-third)",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2),
    gap: theme.spacing(1),
    margin: theme.spacing(0),
  },
}));

export const IntroImgBox = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth: "85%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "50%",
  },
}));

//about

export const AboutImgBox = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "30px 0",
  background: "var(--color-third-30)",
  width: "95%",
  marginLeft: "5%",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginRight: "5%",
  },
}));

//token
export const TokenImgBox = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "30px 0",
  background: "var(--color-third-30)",
  width: "95%",
  marginRight: "5%",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginLeft: "5%",
  },
}));

//the app
export const StepBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(4),
  padding: theme.spacing(2.75, 5),
  borderRadius: "20px 0 20px 0",
  background: "var(--color-third)",
  border: "1px solid var(--color-third)",
  ":hover": {
    border: "1px solid var(--color-primary)",
  },
  "& a:hover": {
    color: "var(--color-primary)!important",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5, 2),
    gap: theme.spacing(4),
  },
}));

export const AppImgBox = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth: "85%",
}));

//partner

export const ContainerPartner = styled(Box)(({ theme }) => ({
  display: "grid",
  width: "100%",
  gap: "32px",
  overflow: "hidden",
  gridTemplateColumns: "repeat(5, 1fr)",
  margin: theme.spacing(10, 0),
  "& a": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "url(/images/home/frame-partner.png)",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: "85px",
    padding: "16px 48px",
  },
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "16px",
    gridTemplateColumns: "repeat(3, 1fr)",
    margin: theme.spacing(5, 0),
    "& a": {
      padding: "6px 16px",
      height: "64px",
    },
  },
}));

export const PartnerLogo = styled("img")(({ theme }) => ({
  transition: "transform 150ms ease-in-out",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

//newsletter

export const NewslettersBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "url(/images/home/frame-newsletters.png)",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  padding: theme.spacing(10, 5),
  gap: 32,
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    bottom: "-110px",
    left: "-110px",
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    border: "1px solid var(--color-primary)",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    top: "-150px",
    right: "-120px",
    height: "300px",
    width: "300px",
    borderRadius: "50%",
    border: "1px solid var(--color-primary)",
    zIndex: 0,
  },
  " div": { zIndex: 1 },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: theme.spacing(1),
    padding: theme.spacing(5),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(1),
    padding: theme.spacing(3),
    "&:before": {
      bottom: "-130px",
      left: "-130px",
    },
    "&:after": {
      top: "-230px",
      right: "-150px",
    },
  },
}));

//box

export const BoxStack = styled(Stack)(({ theme }) => ({
  borderRadius: " 20px 0 20px 0",
  position: "relative",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  marginTop: theme.spacing(5),
  "&::before": {
    content: "''",
    position: "absolute",
    background: "var(--linear-primary)",
    inset: "0px",
    zIndex: 1,
    borderRadius: " 20px 0  20px 0",
    padding: "1px",
    WebkitMask:
      "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box,linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
    WebkitMaskComposite: "xor",
  },
  [theme.breakpoints.down("md")]: {
    minWidth: 280,
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: 100,
  },
}));

export const BoxImgStack = styled(Stack)(({ theme }) => ({
  borderRadius: "20px 0 20px 20px",
  position: "relative",
  padding: theme.spacing(2),
  background: "var(--linear-primary-10)",
  minHeight: 292,
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    minHeight: 250,
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: 200,
  },
}));
export const NameBox = styled(Stack)(({ theme }) => ({
  background: "var(--linear-primary)",
  color: "var(--color-accent)",
  padding: theme.spacing(1.5, 2),
  borderRadius: "0 10px 0 10px",
  textAlign: "center",
  " .MuiTypography-body1": {
    fontSize: "18px",
    fontWeight: 800,
  },
  [theme.breakpoints.down("md")]: {},
}));

export const SliderCustom = styled(Slider)(({ theme }) => ({
  "& .slick-arrow.slick-next, .slick-arrow.slick-prev": {
    zIndex: 3,
    width: "56px",
    height: "56px",
    border: "1px solid var(--color-secondary)",
    borderRadius: "10px",
    "&:before": {
      color: "var(--color-white)",
      fontSize: "56px",
      lineHeight: 0,
    },
    ":hover": {
      background: "var(--color-secondary)",
      "&:before": {
        color: "var(--color-accent)",
        fontSize: "56px",
        lineHeight: 0,
      },
    },
  },
  "& .slick-arrow.slick-next": {
    right: 0,
    "&:before": {
      content: '"›"',
    },
  },
  "& .slick-arrow.slick-prev": {
    left: 0,
    "&:before": {
      content: '"‹"',
    },
  },

  [theme.breakpoints.down("sm")]: {
    "& .slick-arrow.slick-next, .slick-arrow.slick-prev": {
      zIndex: 3,
      width: "36px",
      height: "36px",
      border: "1px solid var(--color-secondary)",
      borderRadius: "10px",
      "&:before": {
        color: "var(--color-white)",
        fontSize: "36px",
        lineHeight: 0,
      },
      ":hover": {
        background: "var(--color-secondary)",
        "&:before": {
          color: "var(--color-accent)",
          fontSize: "36px",
          lineHeight: 0,
        },
      },
    },
  },
}));

//watch

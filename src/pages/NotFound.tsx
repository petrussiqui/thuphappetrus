import { Box, Container, Stack, Typography } from "@mui/material";
import { ImgAccent } from "components/home/HomeStyled";
import useResponsive from "hooks/useResponsive";

export default function NotFound() {
  const isMobile = useResponsive("down", "sm");
  return (
    <Container maxWidth="md">
      <Stack
        sx={{ height: "100%" }}
        justifyContent="center"
        alignItems="center"
        m={10}
        position={"relative"}
      >
        <ImgAccent
          data-aos="slide-right"
          data-aos-once="true"
          src="/images/home/line-left.png"
          sx={{ top: -30, left: 0, width: isMobile ? "50px" : "auto" }}
          alt=""
        />
        <ImgAccent
          data-aos="slide-left"
          data-aos-once="true"
          src="/images/home/line-right.png"
          sx={{
            bottom: "-30px",
            right: 0,
            width: isMobile ? "50px" : "auto",
          }}
          alt=""
        />
        <Box data-aos="fade-up" data-aos-once="true">
          <img
            src="logo.png"
            width="auto"
            alt=""
            // style={{ objectFit: "contain" }}
          />
        </Box>
        <Stack data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
          <Typography fontSize={"1.2rem"} textAlign="center">
            THIS SITE IS
          </Typography>
          <Typography fontSize={"2rem"} textAlign="center">
            COMING SOON
          </Typography>
          <Typography fontSize={"0.9rem"} textAlign="center">
            We are going to launch this site very Soon. Stay tune...!
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

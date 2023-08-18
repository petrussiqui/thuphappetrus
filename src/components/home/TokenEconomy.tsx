import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ImgAccent, TokenImgBox, SectionBox } from "./HomeStyled";
import { TypographyGradient } from "components/common/CustomTypography";
import useResponsive from "hooks/useResponsive";
import { useAppSelector } from "store/hooks";
const content = {
  label: "Token",
  title: "TOKEN ECONOMY",
  subtitle:
    "Sprint issues 2 separate types of Tokens to avoid conflicts between the reward system and the project finance system. Each type of token has different tasks and functions.",
};
export default function TokenEconomy() {
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  const isMobile = useResponsive("down", "sm");
  return (
    <SectionBox
      sx={{ backgroundImage: "url('/images/home/section-bg-2.png')" }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          sx={{ flexDirection: isMobile ? "column-reverse" : "" }}
        >
          <Grid item xs={12} md={6}>
            <TokenImgBox data-aos="slide-right" data-aos-once="true">
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Box
                  component={"img"}
                  src="/images/home/frame-bg.png"
                  alt=""
                  width={"100%"}
                />
                <ImgAccent
                  src="/images/home/token.png"
                  alt=""
                  height={"60%"}
                  sx={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </Stack>
            </TokenImgBox>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-once="true"
            data-aos-duration={200}
          >
            <Stack gap={2} height={"100%"} justifyContent={"center"}>
              <TypographyGradient variant="body1" fontWeight={800}>
                {library["token"] || content.label}
              </TypographyGradient>
              <Typography
                variant={isMobile ? "h5" : "h3"}
                fontWeight={700}
                color={"var(--color-text-title)"}
              >
                {library["token_economy"] || content.title}
              </Typography>
              <Typography
                variant="body1"
                color={"var(--color-text-secondary)"}
                sx={{ opacity: "0.5" }}
                mt={1}
              >
                {library["subtitle_token"] || content.subtitle}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SectionBox>
  );
}

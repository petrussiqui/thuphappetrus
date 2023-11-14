import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { TypographyGradient } from "components/common/CustomTypography";
import { ImgAccent, AppImgBox, SectionBox, StepBox } from "./HomeStyled";
import useResponsive from "hooks/useResponsive";
import { useState } from "react";
import { useAppSelector } from "store/hooks";
const content = {
  title: "To Begin the Journey",
  info: [
    {
      id: 1,
      title: "Step 1",
      title_key: "step_1",
      content: "Download the Sprint Application",
      content_key: "step_1_label",
      link: "https://apps.apple.com/app/stepwatch/id6446752981?l",
      link2: "https://play.google.com/store/apps/details?id=com.sp.stepwatch",
    },
    {
      id: 2,
      title: "Step 2",
      title_key: "step_2",
      content: "Register Account on the App or Website",
      content_key: "step_2_label",
      link: "https://stepwatch.io/app/register",
    },
    {
      id: 3,
      title: "Step 3",
      title_key: "step_3",
      content: "Connect your wallet & Bind your Account",
      content_key: "step_3_label",
      link: "https://stepwatch.io/",
    },
    {
      id: 4,
      title: "Step 4",
      title_key: "step_4",
      content: "Buy NFT on Sprint NFT Marketplace",
      content_key: "step_4_label",
      link: "https://stepwatch.io/marketplace",
    },
    {
      id: 5,
      title: "Step 5",
      title_key: "step_5",
      content: "Start Your Journey and Move",
      content_key: "step_5_label",
      link: "",
    },
    {
      id: 6,
      title: "Step 6",
      title_key: "step_6",
      content: "Share Your Sprint Journey with Friends",
      content_key: "step_6_label",
      link: "https://twitter.com/stepwatchglobal",
    },
  ],
};
export default function TheApp() {
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  const isMobile = useResponsive("down", "sm");
  const [step, setStep] = useState(1);
  const [changeStep, setChangeStep] = useState(false);
  return (
    <SectionBox
      sx={{ backgroundImage: "url('/images/home/section-bg-1.png')" }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack gap={2}>
              <Box
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-once="true"
              >
                <TypographyGradient
                  variant={isMobile ? "h6" : "h4"}
                  fontWeight={800}
                >
                  {content.title}
                </TypographyGradient>
              </Box>
              <Stack
                gap={2}
                mt={3}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-once="true"
              >
                {content.info.map((item, index) => (
                  <StepBox
                    key={index}
                    onClick={() => {
                      setStep(item.id);
                      setChangeStep(!changeStep);
                    }}
                    sx={{
                      cursor: "pointer",
                      border:
                        step === item.id
                          ? "1px solid var(--color-primary)"
                          : "1px solid var(--color-third)",
                    }}
                  >
                    <Stack direction={"row"} gap={isMobile ? 1.5 : 4}>
                      <Typography
                        variant="body1"
                        fontWeight={700}
                        color={"var(--color-primary)"}
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        {library[item.title_key] || item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color={"var(--color-primary)"}
                        sx={{ opacity: "0.5" }}
                      >
                        {item.content}
                      </Typography>
                    </Stack>
                    {item?.link2 ? (
                      <Stack direction={"row"} gap={2}>
                        <Typography variant="body2">
                          <a
                            href={item.link2}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              color: "var(--color-link)",
                              textDecoration: "underline",
                            }}
                          >
                            Google Play
                          </a>
                        </Typography>
                        <Typography variant="body2">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              color: "var(--color-link)",
                              textDecoration: "underline",
                            }}
                          >
                            App Store
                          </a>
                        </Typography>
                      </Stack>
                    ) : (
                      <Typography variant="body2">
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              color: "var(--color-link)",
                              textDecoration: "underline",
                            }}
                          >
                            Link
                          </a>
                        )}
                      </Typography>
                    )}
                  </StepBox>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <AppImgBox
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-once="true"
              >
                <Box
                  component={"img"}
                  src="/images/home/frame.png"
                  alt=""
                  maxWidth={"100%"}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "80%",
                  }}
                >
                  <Box
                    className={
                      changeStep
                        ? "animate__animated animate__zoomIn animate__fast"
                        : "animate__animated"
                    }
                  >
                    <Box
                      component={"img"}
                      src={`/images/home/phone-${step}.png`}
                      alt=""
                      width={"100%"}
                      className={
                        !changeStep
                          ? "animate__animated animate__zoomIn animate__fast"
                          : "animate__animated"
                      }
                    />
                  </Box>
                </Box>
                <ImgAccent
                  src="/images/home/star.png"
                  sx={{ top: 0, left: 0 }}
                  alt=""
                  className="star"
                />
                <ImgAccent
                  src="/images/home/star.png"
                  sx={{ bottom: 0, right: 0 }}
                  alt=""
                  className="star"
                />
              </AppImgBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SectionBox>
  );
}

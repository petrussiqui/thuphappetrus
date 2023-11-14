import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { TypographyGradient } from "components/common/CustomTypography";
import useResponsive from "hooks/useResponsive";
import { AboutImgBox, ImgAccent, SectionBox } from "./HomeStyled";
import { useAppSelector } from "store/hooks";
const content = {
  title:
    "Unleashing a New Era of Rewards, Community, and Innovation in Your Wellness Journey",
  info: [
    {
      title: "Fitness First",
      title_key: "about_title_1",
      content_key: "about_subtitle_1",
      content:
        "At the heart of Sprint is a commitment to health and fitness. The platform rewards users for improving their physical strength and encourages regular exercise. ",
      icon: "/images/icons/about-user.png",
    },
    {
      title: "Move to Earn",
      title_key: "about_title_2",
      content_key: "about_subtitle_2",
      content:
        "While the primary focus is on improving users' physical health, Sprint also offers attractive reward mechanisms for members who own NFTs, encouraging regular exercise habits.",
      icon: "/images/icons/about-habit.png",
    },
    {
      title: "Easy To Earn",
      title_key: "about_title_3",
      content_key: "about_subtitle_3",
      content:
        "You don't need to understand NFT or Cryptocurrency to use Sprint. Simply download the app, participate in exercise, or purchase a simple NFT. Your goal is to practice, exercise, and repeat.",
      icon: "/images/icons/about-earn.png",
    },
    {
      title: "Building Workout Habits",
      title_key: "about_title_4",
      content_key: "about_subtitle_4",
      content:
        "Sprint's realistic rewards and social media platforms make it easier to create active, healthy, and exercise routines.",
      icon: "/images/icons/about-user.png",
    },
  ],
};
export default function About() {
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  const isMobile = useResponsive("down", "sm");
  return (
    <SectionBox
      sx={{ backgroundImage: "url('/images/home/section-bg-1.png')" }}>
      <Container maxWidth='xl'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack gap={2}>
              <TypographyGradient
                variant='h5'
                fontWeight={800}
                data-aos='fade'
                data-aos-easing='linear'
                data-aos-once='true'>
                {content.title}
              </TypographyGradient>

              <Stack gap={4} mt={4}>
                {content.info.map((item, index) => (
                  <Stack
                    direction={"row"}
                    alignItems={"flex-start"}
                    key={index}
                    gap={isMobile ? 1.5 : 3}
                    data-aos='fade-up'
                    data-aos-duration={index * 100}
                    data-aos-easing='linear'
                    data-aos-once='true'>
                    <Box
                      component={"img"}
                      src={item.icon}
                      alt=''
                      width={isMobile ? "36px" : "48px"}
                    />
                    <Box>
                      <Typography
                        variant='h6'
                        fontWeight={700}
                        color={"var(--color-text)"}
                        fontSize={isMobile ? "16px" : "16px"}>
                        {item.title}
                        {/* {library[item.title_key] || item.title} */}
                      </Typography>
                      <Typography
                        variant={"body1"}
                        color={"var(--color-subtext)"}
                        sx={{ opacity: "0.5" }}
                        fontSize={isMobile ? "13px!important" : ""}>
                        {item.content}
                        {/* {library[item.content_key] || item.content} */}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <AboutImgBox
              data-aos='fade-left'
              data-aos-easing='linear'
              data-aos-once='true'>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Box
                  component={"img"}
                  src='/images/home/frame-bg.png'
                  alt=''
                  width={"100%"}
                />
                <ImgAccent
                  src='/images/home/character-woman.png'
                  alt=''
                  height={"90%"}
                  sx={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </Stack>
            </AboutImgBox>
          </Grid>
        </Grid>
      </Container>
    </SectionBox>
  );
}

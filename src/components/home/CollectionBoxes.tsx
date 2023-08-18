import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { TypographyGradient } from "components/common/CustomTypography";
import useResponsive from "hooks/useResponsive";
import {
  BoxImgStack,
  BoxStack,
  ImgAccent,
  NameBox,
  SectionBox,
  SliderCustom,
} from "./HomeStyled";
import { useAppSelector } from "store/hooks";
const content = {
  label: "Collection",
  title: "BOXES INFORMATION",
  info: [
    {
      id: 1,
      title: "Secret Box",
      imgUrl: "/images/boxes/SECRET.png",
      gifUrl: "/images/gif/SECRET.gif",
    },
    {
      id: 2,
      title: "Titanium Box",
      imgUrl: "/images/boxes/TITANIUM.png",
      gifUrl: "/images/gif/TITANIUM.gif",
    },
    {
      id: 3,
      title: "Platinum Box",
      imgUrl: "/images/boxes/PLATINUM.png",
      gifUrl: "/images/gif/PLATINUM.gif",
    },
    {
      id: 4,
      title: "Special Box",
      imgUrl: "/images/boxes/SPECIAL.png",
      gifUrl: "/images/gif/SPECIAL.gif",
    },
  ],
};
const boxesSliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  autoplay: true,
  arrows: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function CollectionBoxes() {
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  const isMobile = useResponsive("down", "sm");
  const isDesktop = useResponsive("up", "md");

  const boxesGifSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: false,
    arrows: true,
    centerMode: true,
    // afterChange: function (index: number) {
    //   setCurrentBox(index);
    // },
  };
  return (
    <SectionBox
      sx={{ backgroundImage: "url('/images/home/section-bg-1.png')" }}
    >
      <Container maxWidth="xl">
        <Stack gap={2}>
          <TypographyGradient
            variant="body1"
            fontWeight={800}
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-once="true"
            data-aos-duration={200}
          >
            {library["collection"] || content.label}
          </TypographyGradient>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            fontWeight={700}
            color={"var(--color-text-title)"}
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-once="true"
          >
            {library["box_info"] || content.title}
          </Typography>
        </Stack>
        <Box
          sx={{ padding: isMobile ? 0 : "0 20%", mt: 6, mb: isMobile ? 0 : 6 }}
          data-aos="zoom-in"
          data-aos-once="true"
        >
          <SliderCustom {...boxesGifSliderSettings}>
            {content.info.map((item, index) => (
              <Box key={index}>
                <Stack
                  key={index}
                  alignItems={"center"}
                  sx={{ padding: isMobile ? "0 20%" : "0 15%" }}
                >
                  <img
                    alt={""}
                    src={item.imgUrl}
                    width={isMobile ? "100%" : "70%"}
                  />
                </Stack>
              </Box>
            ))}
          </SliderCustom>
        </Box>
        {isDesktop ? (
          <Box mt={isMobile ? 2 : 8}>
            <Grid container>
              {content.info.map((item, index) => (
                <Grid
                  key={index}
                  item
                  md={3}
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-once="true"
                  data-aos-duration={index * 300}
                >
                  <BoxStack m={2}>
                    <BoxImgStack>
                      <ImgAccent
                        src={"/images/home/frame-nft-bg.png"}
                        alt=""
                        width={"100%"}
                        sx={{
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                      <ImgAccent
                        src={item.imgUrl}
                        alt=""
                        height={"auto"}
                        sx={{
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          maxHeight: "80%",
                        }}
                      />
                    </BoxImgStack>
                    <NameBox>
                      <Typography variant="body1">{item.title}</Typography>
                    </NameBox>
                  </BoxStack>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <Box mt={isMobile ? 2 : 8}>
            <SliderCustom {...boxesSliderSettings}>
              {content.info.map((item, index) => (
                <Box
                  key={index}
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-once="true"
                  data-aos-duration={index * 300}
                >
                  <BoxStack m={2}>
                    <BoxImgStack>
                      <ImgAccent
                        src={"/images/home/frame-nft-bg.png"}
                        alt=""
                        width={"100%"}
                        sx={{
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                      <ImgAccent
                        src={item.imgUrl}
                        alt=""
                        height={"80%"}
                        sx={{
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </BoxImgStack>
                    <NameBox>
                      <Typography variant="body1">{item.title}</Typography>
                    </NameBox>
                  </BoxStack>
                </Box>
              ))}
            </SliderCustom>
          </Box>
        )}
      </Container>
    </SectionBox>
  );
}

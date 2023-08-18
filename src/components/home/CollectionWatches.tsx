import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { TypographyGradient } from "components/common/CustomTypography";
import useResponsive from "hooks/useResponsive";
import {
  BoxImgStack,
  BoxStack,
  ImgAccent,
  SectionBox,
  SliderCustom,
} from "./HomeStyled";
import { useAppSelector } from "store/hooks";
const content = {
  label: "Collection",
  title: "DESCRIBE NFT WATCH",
  info: [
    {
      id: 1,
      title: "Free",
      imgUrl: "/images/watches/FREE.png",
    },
    {
      id: 2,
      title: "Common",
      imgUrl: "/images/watches/COMMON.png",
    },
    {
      id: 3,
      title: "Fine",
      imgUrl: "/images/watches/FINE.png",
    },
    {
      id: 4,
      title: "Superior",
      imgUrl: "/images/watches/SUPERIOR.png",
    },
    {
      id: 5,
      title: "Highend",
      imgUrl: "/images/watches/HIGHEND.png",
    },
    {
      id: 6,
      title: "Luxury",
      imgUrl: "/images/watches/LUXURY.png",
    },
    {
      id: 7,
      title: "Masterpiece",
      imgUrl: "/images/watches/MASTERPIECE.png",
    },
  ],
};
const watchesSliderSettings = {
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
export default function CollectionWatches() {
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  const isMobile = useResponsive("down", "sm");
  const isDesktop = useResponsive("up", "md");
  return (
    <SectionBox
      sx={{ backgroundImage: "url('/images/home/section-bg-1.png')" }}
    >
      <Stack
        gap={2}
        alignItems={"center"}
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-once="true"
      >
        <TypographyGradient variant="body1" fontWeight={800}>
          {library["collection"] || content.label}
        </TypographyGradient>
        <Typography
          variant={isMobile ? "h5" : "h3"}
          fontWeight={700}
          color={"var(--color-text-title)"}
        >
          {library["describe_watch"] || content.title}
        </Typography>
      </Stack>
      {!isDesktop ? (
        <Box
          mt={8}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-once="true"
        >
          <SliderCustom {...watchesSliderSettings}>
            {content.info.map((item, index) => (
              <Box key={index}>
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
                  <Box>
                    <Typography
                      variant="body1"
                      color={"var(--color-text-title)"}
                      fontWeight={600}
                      fontSize={"18px"}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color={"var(--color-text-title)"}
                      sx={{ opacity: "0.5" }}
                    >
                      Sprint NFT
                    </Typography>
                  </Box>
                </BoxStack>
              </Box>
            ))}
          </SliderCustom>
        </Box>
      ) : (
        <Container maxWidth="xl">
          <Box mt={8}>
            <Grid container justifyContent={"center"}>
              {content.info.map((item, index) => (
                <Grid item md={3} key={index}>
                  <BoxStack
                    m={1}
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-once="true"
                    data-aos-duration={index * 200}
                  >
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
                    <Box>
                      <Typography
                        variant="body1"
                        color={"var(--color-text-title)"}
                        fontWeight={600}
                        fontSize={"18px"}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color={"var(--color-text-title)"}
                        sx={{ opacity: "0.5" }}
                      >
                        Sprint NFT
                      </Typography>
                    </Box>
                  </BoxStack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      )}
    </SectionBox>
  );
}

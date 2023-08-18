import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { ButtonLoadingPrimary } from "components/common/CustomButton";
import { TypographyGradient } from "components/common/CustomTypography";
import useResponsive from "hooks/useResponsive";
import { useAppSelector } from "store/hooks";
import {
  ButtonGroup,
  BuyOnGroup,
  ImgAccent,
  IntroContentBox,
  IntroImgBox,
  IntroTitleBox,
} from "./HomeStyled";
const content = {
  title: "Pioneer the NFT and M2E Platform",
  title_key: "",
  subtitle:
    "Connecting Health, Entertainment, and Finance in a Unique Experience",
  info: [
    {
      title: "2.9M+",
      content: "Active Users",
      content_key: "active_users",
    },
    {
      title: "2.5M+",
      content: "Runners",
      content_key: "runners",
    },
    // {
    //   title: "2,2M+",
    //   content: "Buyer",
    // },
  ],
  iosLink: "https://apps.apple.com/app/stepwatch/id6446752981?l",
  androidLink: "https://play.google.com/store/apps/details?id=com.sp.stepwatch",
  buyOn: [
    {
      imgURL: "/images/home/kucoin.png",
      link: "https://www.kucoin.com/price/STEPWATCH",
    },
    // {
    //   imgURL: "/images/home/gateio.png",
    //   link: "https://www.gate.io/price/stepwatch-swp",
    // },
    {
      imgURL: "/images/home/mexcglobal.png",
      link: "https://www.mexc.com/exchange/STEPWATCH_USDT?_from=market",
    },
  ],
};
export default function Introduction() {
  const isMobile = useResponsive("down", "sm");
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  return (
    <Grid
      container
      spacing={5}
      sx={{ flexDirection: isMobile ? "column-reverse" : "" }}
    >
      <Grid item xs={12} md={6}>
        <IntroTitleBox>
          <ImgAccent
            data-aos="slide-right"
            data-aos-once="true"
            src="/images/home/line-left.png"
            sx={{ top: -8, left: -8, width: isMobile ? "50px" : "auto" }}
            alt=""
          />
          <ImgAccent
            data-aos="slide-left"
            data-aos-once="true"
            src="/images/home/line-right.png"
            sx={{
              bottom: "30px",
              right: 0,
              width: isMobile ? "50px" : "auto",
            }}
            alt=""
          />
          <Box data-aos="zoom-in" data-aos-once="true">
            <TypographyGradient
              variant="h1"
              fontWeight={800}
              lineHeight={"1!important"}
              fontSize={isMobile ? "40px" : "56px"}
            >
              {content.title}
            </TypographyGradient>
            <Typography
              variant="body1"
              color={"var(--color-text-title)"}
              sx={{ opacity: "0.5" }}
              mt={isMobile ? 2 : 3}
            >
              {content.subtitle}
              {/* {library["subtitle_intro"] || content.subtitle} */}
            </Typography>
            <IntroContentBox>
              {content.info.map((item, index) => (
                <Box key={index}>
                  <Typography
                    variant={isMobile ? "h6" : "h4"}
                    fontWeight={700}
                    color={"var(--color-text-title)"}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color={"var(--color-text-title)"}
                    sx={{ opacity: "0.5" }}
                  >
                    {library[item.content_key] || item.content}
                  </Typography>
                </Box>
              ))}
            </IntroContentBox>
          </Box>
        </IntroTitleBox>
        <Box
          sx={{
            background: "var(--linear-primary)",
            height: "1px",
            width: "100%",
            margin: "16px 0",
          }}
          data-aos="flip-right"
          data-aos-delay="200"
          data-aos-once="true"
        />
        <ButtonGroup
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="400"
        >
          <Link href={content.androidLink} target="_blank">
            <img src="/images/home/google-play.png" alt="" />
          </Link>
          <Link href={content.iosLink} target="_blank">
            <img src="/images/home/ios.png" alt="" />
          </Link>
        </ButtonGroup>
        <Stack
          direction={"row"}
          gap={1}
          mt={1}
          alignItems={"center"}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="600"
        >
          <img
            src="/images/icons/icon-swp.png"
            alt=""
            width={"36"}
            className="live-on"
          />
          <Typography color={"#fff"}>Buy on:</Typography>
        </Stack>
        <BuyOnGroup
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="600"
        >
          {content.buyOn.map((item, index) => (
            <Link key={index} href={item.link} target="_blank">
              <ButtonLoadingPrimary>
                <img src={item.imgURL} alt="" height={"100%"} />
              </ButtonLoadingPrimary>
            </Link>
          ))}
        </BuyOnGroup>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          data-aos="zoom-in-left"
          data-aos-delay="500"
        >
          <IntroImgBox>
            <Box
              component={"img"}
              src="/images/home/frame.png"
              alt=""
              maxWidth={"100%"}
            />
            <ImgAccent
              src="/images/gif/UNBOX.gif"
              alt=""
              width={"125%"}
              sx={{
                maxWidth: "125%",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              className="animate__animated animate__fadeIn"
            />{" "}
            <ImgAccent
              src="/images/home/star.png"
              sx={{ top: 0, left: 0, width: isMobile ? "15px" : "auto" }}
              alt=""
              className="star"
            />
            <ImgAccent
              src="/images/home/star.png"
              sx={{
                bottom: 5,
                right: 0,
                width: isMobile ? "15px" : "auto",
              }}
              alt=""
              className="star"
            />
          </IntroImgBox>
        </Stack>
      </Grid>
    </Grid>
  );
}

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Stack,
  Typography,
} from "@mui/material";
// material
import { styled } from "@mui/material/styles";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//
import Slider from "react-slick";
import Title from "../Title";
import useResponsive from "./hooks/useResponsive";

const settings = {
  speed: 500,
  slidesToScroll: 1,
  centerMode: true,
  infinite: true,
  swipeToSlide: true,
  arrows: false,
};

// ----------------------------------------------------------------------

const CustomGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  position: "relative",
  "& .read-more": {
    color: "#93EEEC",
    position: "absolute",
    left: "calc(50% - 60px)",
    zIndex: "1000",
    bottom: "7px",
    borderRadius: "50px",
    width: "120px",
    "&:hover": {
      background: "rgba(255,255,255,0.2)",
    },
  },
  "& .slick-track": {
    padding: "4rem 0px",
    "& .slick-slide": {
      transition: "all 0.3s ease-in-out",
      padding: "10px",
      "&.slick-slide": {
        opacity: 0,
      },
      "&.slick-active": {
        opacity: "1 !important",
      },
      "&.slick-center": {
        marginTop: "-3rem",
      },
    },
  },
  "& .thumb-list": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    listTypeStyle: "none",
    position: "relative",
    zIndex: "1000",
    "& li": {
      width: "25px",
      height: "25px",
      borderRadius: " 30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      opacity: "0.7",
      "&:hover": {
        opacity: "1",
      },
    },
    "& .arrow": {
      background: "#93EEEC",
      color: "#000",
      margin: "0px 1rem",
    },

    "& .dot": {
      opacity: 0.3,
      "&.active": {
        opacity: 1,
      },
      "& span": {
        display: "block",
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        background: "#93EEEC",
      },
    },
  },
}));

const CustomDivider = styled(Box)(({ theme }) => ({
  width: "60%",
  height: "12px",
  background: "url(images/background/texture.png)",
  backgroundSize: "contain",
  maskImage: "linear-gradient(to right,#fff, transparent)",
  opacity: 0.4,
  margin: "0.5rem 2px",
}));

const SlideImage = styled("img")(({ theme }) => ({}));

const CustomBox = styled(Box)(({ theme }) => ({
  background: "#6BA5A1",
  borderRadius: "15px",
  overflow: "hidden",
  "& .img": {
    width: "100% !important",
    height: "auto",
  },
}));

const Footer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  background: "#13161F",
  color: "rgba(255,255,255,0.8)",
  color: "#93EEEC",
  padding: "15px 15px",
  "& span": {
    opacity: 0.5,
    color: "#fff",
  },
}));

// ----------------------------------------------------------------------

export default function Section10({ ...other }) {
  const { setting } = useSelector((state) => state);
  const { langLibrary } = setting;
  var isDesktop = useResponsive("up", "sm");
  const [activeIndex, setActiveIndex] = useState(0);

  const slideRef = useRef();

  // const items = [
  //   "/images/section9/line_2.png",
  //   "/images/section9/line_1.png",
  //   "/images/section9/line_3.png",
  //   "/images/section9/line_2.png",
  // ];

  const medias = [
    {
      icon: "/images/icon/telegram.png",
      link: "https://t.me/StepWatchAnnounements",
    },
    {
      icon: "/images/icon/twitter.png",
      link: "https://twitter.com/stepwatchglobal",
    },
    {
      icon: "/images/icon/discord.png",
      link: "https://discord.com/invite/stepwatch",
    },
    {
      icon: "/images/icon/medium.png",
      link: "https://medium.com/@stepwatchglobal",
    },
  ];

  const items = [
    {
      title: "HD랩스, M2E 'STEPWATCH' 출시 기념 사전가입 이벤트",
      description:
        "[디스커버리뉴스=박다정 기자] HD랩스가 오는 9일부터 19일까지 M2E 서비스 'STEPWATCH' 스텝워치 정식 출시 기념으로 사전가입...",
      image:
        "https://cdn.discoverynews.kr/news/photo/202206/815105_821462_341.png",
      link: "http://www.discoverynews.kr/news/articleView.html?idxno=815105",
    },
    {
      title: "SPLabs, HDLabs와 m2e “step watch” 서비스 런칭",
      description:
        "Splabs(에스피랩스)에서 개발, 기획하고 HDlabs(에이치디랩스)에서 퍼블리싱을 담당한 M2E 프로젝트 스텝워치를 31일 출시한다고 밝혔다.",
      image:
        "http://www.jeollailbo.com/news/photo/202205/658378_70629_3827.jpg",
      link: "http://www.jeollailbo.com/news/articleView.html?idxno=658378",
    },
    {
      title: "SP랩스, HD랩스와 M2E 프로젝트 ‘스텝워치’ 출시",
      description:
        "SP랩스(SPlabs, 대표 김현정)는 SP랩스(SPlabs)에서 개발, 기획하고 HD랩스에서 퍼블리싱을 담당한 M2E 프로젝트 스텝워치(step watch)를...",
      image: "http://www.it-b.co.kr/news/photo/202205/59995_57536_3231.jpg",
      link: "http://www.it-b.co.kr/news/articleView.html?idxno=59995",
    },

    //  ======================

    {
      title: "HD랩스, M2E 서비스 ‘STEPWATCH’ 런칭",
      description:
        "HD랩스(에이치디랩스)는 MOVE TO EARN(M2E)라는 새로운 서비스 ‘STEPWATCH(스텝워치)’ 프로젝트를 런칭한다고 18일 밝혔다.",
      image: "http://www.it-b.co.kr/news/photo/202205/59657_57187_1519.jpg",
      link: "http://www.it-b.co.kr/news/articleView.html?idxno=59657",
    },
    {
      title: "HD랩스 M2E 서비스 'STEPWATCH', 일본 진출 확정",
      description:
        "[디스커버리뉴스=김보라 기자] 에이치디랩스의 'STEPWATCH' 스텝워치 프로젝트가 글로벌 진출 첫걸음으로 일본을 선정하고 공략을 위해 ...",
      image:
        "https://cdn.discoverynews.kr/news/photo/202205/803659_809586_3612.jpg",
      link: "http://www.discoverynews.kr/news/articleView.html?idxno=803659",
    },
    {
      title: "HD랩스, 조깅플랫폼 M2E(Move to Earn) 출시 예정",
      description:
        "[세계비즈=박혜선 기자] HD랩스가 새로운 프로젝트 M2E(Move to Earn)를 출시할 예정이라고 9일 밝혔다.",
      image:
        "http://www.segyebiz.com/content/image/2022/05/09/20220509511371.jpg",
      link: "http://www.segyebiz.com/newsView/20220509511350?OutUrl=naver",
    },
    {
      title: "HD랩스, 프로젝트 M2E ‘STEPWATCH’ 출시 예정",
      description:
        "[HD랩스 M2E는 조깅을 하면서 STEPWATCH로 돈을 버는 형태의 프로그램이며 현재 베트남에서 플랫폼과 앱 개발에 전사의 역량을 집중하여...",
      image: "https://cdn.itbiznews.com/news/photo/202205/71638_66168_5533.jpg",
      link: "https://www.itbiznews.com/news/articleView.html?idxno=71638",
    },
    {
      title: "에이치디랩스 M2E 'STEPWATCH' 1차 테스터 모집 마감",
      description:
        "에이치디랩스(HD랩스) “STEPWATCH” 스텝워치는 건강을 위해 걷고, 뛰고 돈도 번다는 아이디어로 출발하여 ‘건강’ 중점을 둔 서비스로 현재...",
      image: "https://cdn.nbntv.co.kr/news/photo/202205/972933_84765_25.png",
      link: "https://www.nbntv.co.kr/news/articleView.html?idxno=972933",
    },
    {
      title: "HD랩스, 프로젝트 M2E ‘STEPWATCH’ 1차 테스터 모집 조기 마감",
      description:
        "에이치디앱스(HD랩스)가 출시 예정 프로젝트인 M2E ‘STEPWATCH’ 1차 테스터 모집을 조기 마감했다고 밝혔다.",
      image:
        "https://cdn.nextdaily.co.kr/news/photo/202205/206054_306309_127.jpg",
      link: "http://www.nextdaily.co.kr/news/articleView.html?idxno=206054",
    },
    {
      title: "㈜에이치디랩스, M2E(Move to Earn) 서비스 “STEPWATCH”로 주목",
      description:
        "㈜에이치디랩스(HD랩스)에서 국내 런칭한 “STEPWATCH” 스텝워치가 M2E(Move to Earn) 서비스로 주목받고 있다...",
      image:
        "https://cdn.greendaily.co.kr/news/photo/202205/62297_62003_917.jpg",
      link: "http://www.greendaily.co.kr/news/articleView.html?idxno=62297",
    },
    {
      title: "HD랩스, M2E 서비스 ‘STEPWATCH’ 런칭",
      description:
        "HD랩스(에이치디랩스)는 MOVE TO EARN(M2E)라는 새로운 서비스 ‘STEPWATCH(스텝워치)’ 프로젝트를 런칭한다고 18일 밝혔다.",
      image: "http://www.it-b.co.kr/news/photo/202205/59657_57187_1519.jpg",
      link: "http://www.it-b.co.kr/news/articleView.html?idxno=59657",
    },
  ];
  const handleClickNext = () => {
    slideRef.current.slickNext();
  };
  const handleClickBack = () => {
    slideRef.current.slickPrev();
  };
  const handleClickThumb = (index) => {
    slideRef.current.slickGoTo(index);
  };

  return (
    <Stack height={"100%"} mt={"10vw"}>
      <CustomGrid container>
        <Grid item xs={12} md={11} lg={9}>
          <Stack justifyContent="center" alignItems="center">
            <Title>{langLibrary.media}</Title>
          </Stack>
          <Slider
            beforeChange={(e, next) => setActiveIndex(next)}
            ref={slideRef}
            {...settings}
            slidesToShow={isDesktop ? 3 : 1}
          >
            {items.map((item, index) => (
              <CustomBox position={"relative"} key={index}>
                <Card sx={{ background: "linear-gradient(#6AA5A2,#6AA5A2)" }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={item.image}
                    alt="image"
                  />
                  <CardContent sx={{ color: "#fff" }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" mt={2}>
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={item.link} target="_blank">
                      <Button
                        className="read-more"
                        style={{ height: isDesktop ? "2vw" : "30px" }}
                      >
                        {langLibrary.read_more}
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </CustomBox>
            ))}
          </Slider>
          <ul className="thumb-list" style={{ marginTop: "-5rem" }}>
            <li className="arrow" onClick={() => handleClickBack()}>
              <IconArrowLeft stroke={3} />
            </li>
            {items.map((item, i) => (
              <li
                key={i}
                className={`dot ${activeIndex === i ? "active" : ""}`}
                onClick={() => handleClickThumb(i)}
              >
                <span></span>
              </li>
            ))}
            <li className="arrow" onClick={() => handleClickNext()}>
              <IconArrowRight stroke={3} />
            </li>
          </ul>
        </Grid>
      </CustomGrid>
      <Footer direction={"row"} mt="10vw">
        <Stack>
          <Typography>
            Contact us: <span>contact@stepwatch.io</span>
          </Typography>
          <Typography variant="body2" mt={2}><span>Data provided by</span></Typography>
          <Stack direction="row" alignItems="center" sx={{ marginLeft: "-15px" }}>
            <img src='/images/CMC.png' height={70} onClick={() => window.open('https://coinmarketcap.com/vi/currencies/stepwatch/')} />
            <img src='/images/Coingecko.png' height={50} onClick={() => window.open('https://www.coingecko.com/vi/ty_gia/stepwatch')} />
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" style={{ flexGrow: 1 }} >
          <Hidden mdDown>
            <Typography><span>Copyright © 2022 SPLabs Co. LTD All Rights Reserved</span></Typography>
          </Hidden>
        </Stack>
        <Stack direction={"row"} minWidth={150}>
          {medias.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer">
              <img
                style={{
                  objectFit: "contain",
                  height: "25px",
                  margin: "0px 5px",
                }}
                src={item.icon}
                key={index}
                alt=""
              />
            </a>
          ))}
        </Stack>
      </Footer>
    </Stack>
  );
}

import { Box, Button, Container, Grid, styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import * as CusConst from '../settings/constants';
import { LanguagesList } from "../settings/carouselList";
import Slider from "react-slick";

//-----------------------------------------------------

const CusGrid = styled(Grid)(() => ({
    margin: '20px 0 20px -8px',
    "& h1": {
        textAlign: 'center',
        marginTop: '-20px',
        color: CusConst.ACCENT_COLOR,
    },
}));
//Custom Tag with scss and responsive
const CusGridContent = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexFlow: 'wrap',
    alignContent: 'center',
    justifyContent: 'stretch',
    paddingLeft: '30px',
    [theme.breakpoints.down('sm')]: {
        paddingRight: '30px',
        justifyContent: 'center',
    },
    '& h2': {
        fontSize: '28px',
        color: CusConst.ACCENT_COLOR,
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    '& p': {
        fontSize: '16px',
        lineHeight: '1.6em',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'justify',
        },
    },
}));
const CusButton = styled(Button)(() => ({
    background: "linear-gradient(45deg, #18B8C6 5%, #41D1DC 80%, #9CE2EA 100%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    marginLeft: '10px',
    marginRight: '10px',
    minWidth: '130px',
    '& a': {
        textDecoration: 'none',
        color: 'White',
    }
}));
const CusBoxImg1 = styled(Box)(({ theme }) => ({
    position: 'absolute', width: '40%', right: '-140px',
    bottom: '-300px', zIndex: '-1', opacity: '0.5',
    [theme.breakpoints.down('md')]: {
        width: '70%',
        right: '0',
        bottom: '100px',
        top: 'unset',
    }
}));
const CusBoxImg2 = styled(Box)(({ theme }) => ({
    position: 'absolute', width: '40%', left: '-140px', top: '-150px', zIndex: '-1', opacity: '0.5',
    [theme.breakpoints.down('md')]: {
        width: '50%',
        left: '0',
        bottom: '300px',
        top: 'unset',
    }
}));

//-----------------------------------------------------

const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows:false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]

};

function Homepage() {
    return (
        <React.Fragment>
            <Box sx={{
                textAlign: 'center',
                backgroundImage: 'url("/petrus-app/img/top3.png")',
                backgroundPositionY: 'top',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                marginTop: '-20px',

            }}>
                <Container maxWidth="lg">
                    <CusGrid container columnSpacing={2} sx={{
                        minHeight: { xs: 'none', md: '75vh' },
                        flexDirection: { xs: 'column-reverse', md: 'unset' }
                    }}>
                        <Grid xs={12} md={7}
                            sx={{
                                display: 'flex',
                                flexFlow: 'wrap',
                                alignContent: 'center',
                            }}>
                            <Box>
                                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_eusamc.json"
                                    background="transparent" speed="1" loop autoplay
                                    style={{
                                        height: '50%',
                                        filter: 'saturate(0.1)',
                                    }}>
                                </lottie-player>
                                <Box component='h1' sx={{
                                    letterSpacing: { md: '3px', xs: '1px' },
                                }}>
                                    I'm Petrus Sĩ Quí
                                </Box>
                                <Box sx={{ textAlign: 'center' }}>
                                    <CusButton componentType='a' variant="contained" href="#section2">
                                        Read More
                                    </CusButton>
                                    <CusButton variant="contained">
                                        <NavLink to="/petrus-app/contact/">
                                            Contact
                                        </NavLink>
                                    </CusButton>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={5} sx={{
                            display: 'flex',
                            flexFlow: 'wrap',
                            alignContent: 'center',
                        }}>
                            <Box sx={{
                                padding: { xs: '35px 50px 0px' },
                            }}>
                                <img src='/petrus-app/img/me.png' alt="Person" width='100%'
                                    style={{
                                        clipPath: 'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',
                                        // borderRadius: '100% 100% 50% 50%', 
                                        float: 'right'
                                    }}
                                />

                            </Box>
                        </Grid>

                    </CusGrid>
                </Container>
            </Box>
            <CusBoxImg1>
                <img src='/petrus-app/img/tech.png' alt="leaf" width='100%' />
            </CusBoxImg1>
            <Container maxWidth="lg">
                <CusGrid container columnSpacing={2} id='section2'
                    sx={{
                        order: { xs: 1, md: 2 },
                        flexDirection: { xs: 'column-reverse', md: 'unset' }
                    }}  >
                    <Grid xs={12} md={6}>
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_gnb0jsok.json"
                            background="transparent" speed="1"
                            loop autoplay></lottie-player>
                    </Grid>
                    <CusGridContent xs={12} md={6} sx={{

                    }}>
                        <Box component='h2'>
                            I am a Front-End Developer
                        </Box>
                        <Box component='p'>
                            I will be able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript. Students will also build competency automating application build and deployment using Webpack and improving offline performance of websites using Service Worker.
                        </Box>
                    </CusGridContent>
                </CusGrid>
            </Container>
            <Container maxWidth='lg' sx={{margin:'40px 0'}}>
                <Slider {...settings} className="carousalLanguages">
                    {LanguagesList.map((langItem, index) => (
                        <Box key={index} sx={{
                                display: 'flex!important',
                                justifyContent: 'center'
                        }}>
                            <img src={langItem.src} alt={langItem.title} width='100px' />
                            {console.log(langItem)}
                        </Box>
                    ))}
                </Slider>
            </Container>
            <Container maxWidth='false' sx={{ position: 'relative' }}>
                <CusBoxImg2>
                    <img src='/petrus-app/img/tech.png' alt="leaf" width='100%'
                        style={{ transform: 'scaleX(-1)' }}
                    /></CusBoxImg2>
            </Container>
            <Container maxWidth="lg">
                <CusGrid container columnSpacing={2} sx={{ order: { xs: 1, md: 2 } }}>
                    <CusGridContent xs={12} md={6} >
                        <Box component='h2'>
                            I am a Vietnamese Calligrapher
                        </Box>
                        <Box component='p'>
                            Calligraphy giving is a special traditional custom in Vietnam which originated from the art of writing beautifully. Like many other Vietnamese traditions, no one can tell exactly where and when it began, but anyone can tell its importance and cultural value.
                        </Box>
                    </CusGridContent>
                    <Grid xs={12} md={6}>
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_iqhd0uv0.json"
                            background="transparent" speed="1"
                            loop autoplay></lottie-player>
                    </Grid>
                </CusGrid>
            </Container>

        </React.Fragment >
    );
}
export default Homepage
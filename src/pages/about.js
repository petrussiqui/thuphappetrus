import React from "react";
import { Box, Container, Grid, ImageList, ImageListItem, styled} from "@mui/material";
import { LanguagesList } from "../settings/carouselList";
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';
import { PRIMARY_COLOR } from "../settings/constants";
import MyTimeline from "../sections/timeline";
import { CalligraphyList } from "../settings/carouselList";
import '../styles/Animation.css'



const CusGrid = styled(Grid)(() => ({
    marginTop: '20px',
    marginBottom: '20px',
}));


const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
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

function About() {
    return (
        <React.Fragment>
            <img src="/petrus-app/img/banner.png" alt="banner" width='100%' />
            <LazyLoad>
                <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_d4xlubji.json"
                    style={{
                        position: 'absolute',
                        height: ' 100%',
                        top: '0',
                        right: '0',
                        width: '170%',
                    }} class="Hidden-Mobile animate__animated animate__fadeInUp"
                    background="transparent" speed="1" loop autoplay></lottie-player>
                <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_d4xlubji.json"
                    style={{
                        position: 'absolute',
                        height: ' 100%',
                        top: '0',
                        left: '0',
                        width: '170%',
                    }} class="Hidden-Mobile animate__animated animate__fadeInUp"
                    background="transparent" speed="1" loop autoplay></lottie-player>
            </LazyLoad>
            <Container maxWidth="lg" sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Box className='animate__animated animate__zoomIn' sx={{
                    marginTop: '-100px',
                    width: { md: '300px', xs: '150px' },
                }}>
                    <img src='/petrus-app/img/me3.jpeg' alt="Person" width='100%'
                        style={{
                            clipPath: 'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',
                        }}
                    />
                </Box>
            </Container>
            <Container maxWidth="lg" sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '0 0 70px',
            }}>
                <Box sx={{ width: { md: '70%', xs: '100%' } }}>
                    <Box component='h2'
                        sx={{
                            textAlign: 'center',
                            margin: '30px 0',
                            color: PRIMARY_COLOR,
                        }}>
                        Petrus Sĩ Quí
                    </Box>
                    <Box component='p' sx={{ textAlign: 'center', lineHeight: '1.6em', padding: '0 20px', }}>
                        I’m 23 years old and I’m single. I have just graduated from university in June with the major in computer science. I got 4 month experience as an intern at DT University, 6 month experience as an junior at VTTech company and 9 month experience as an junior at JAY company . I like reading books and cooking. I’m a careful and hard-working person. I’m eager to learn new things and willing to work in team. I easily adapt to with new working environment and take initiative in work.
                    </Box>
                    <Box component='p' sx={{ textAlign: 'center', lineHeight: '1.6em', padding: '0 20px',}}>
                        Passionate font-end developer with 1.5+ years of hands-on experience in developing website
                        using a wide range of front end and back end skills like HTML5, CSS3, JS, Asp.Net MVC5, C#, SQL, MySQL, etc.
                        Developed 20+ website. Looking to futher enhance programming skills as the future full stack developer.
                    </Box>
                </Box>
            </Container>

            <Box sx={{
                background: 'rgba(58,56,61, 0.05)',
                padding: '70px 0',
            }}>
                <Container maxWidth='lg'>
                    <Box component='h2'
                        sx={{
                            textAlign: 'center',
                            margin: '0px 0 50px',
                        }}
                    >My Skills</Box>
                    <Box sx={{ margin: '40px 0' }}>
                        <Slider {...settings} className="carousalLanguages">
                            {LanguagesList.map((langItem, index) => (
                                <Box key={index} sx={{
                                    display: 'flex!important',
                                    justifyContent: 'center'
                                }}>
                                    <img src={langItem.src} alt={langItem.title} width='100px' />
                                   
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </Container>
            </Box>
            <Container maxWidth="lg" sx={{
                padding: '70px 0'
            }}>
                <Box component='h2'
                    sx={{
                        textAlign: 'center',
                        margin: '0px 0 50px',
                        color: PRIMARY_COLOR,
                    }}
                >My Timeline</Box>
                <MyTimeline />
            </Container>
            <Box sx={{
                background: 'rgba(58,56,61, 0.05)',
                padding: '70px 0',
            }}>
                <Container maxWidth='lg'>
                    <Box component='h2'
                        sx={{
                            textAlign: 'center',
                            margin: '0px 0 50px',
                        }}
                    >My Hobbies</Box>
                    <CusGrid container columnSpacing={2} sx={{ order: { xs: 1, md: 2 } }}>
                    <Grid item xs={6} md={3}>
                        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_1tnov7hf.json"
                            background="transparent" loop autoplay></lottie-player>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_4rq0nvpt.json"
                            background="transparent" loop autoplay></lottie-player>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_cPIWGr.json"
                            background="transparent" loop autoplay></lottie-player>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_s1vnsihd.json"
                            background="transparent" loop autoplay></lottie-player>
                    </Grid>
                </CusGrid>
                </Container>
            </Box>
            <Container maxWidth="lg" sx={{
                padding: '70px 0',
                marginBottom: '0px'
            }}>
                 <Box component='h2'
                    sx={{
                        textAlign:'center',
                        margin:'50px 0',
                        color: PRIMARY_COLOR,
                    }} className='animate__animated animate__fadeIn'
                > Gallery</Box>
            <ImageList variant="masonry" cols={3} gap={8}>
                    {CalligraphyList.map((item) => (
                        <ImageListItem key={item.src}>
                            <img
                                src={`${item.src}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
               
                </Container>
                <Container maxWidth='lg'>
                    <CusGrid container columnSpacing={2} sx={{ order: { xs: 1, md: 2 } }}>
                    <Grid item xs={0} md={4}>
                        
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_07PkRX.json"
                            background="transparent" loop autoplay></lottie-player>
                    </Grid>
                    <Grid item xs={0} md={4}>
                       
                    </Grid>
                </CusGrid>
                </Container>
        </React.Fragment>
    );
}
export default About
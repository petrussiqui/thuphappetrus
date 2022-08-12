
import {  Container, Grid, styled, Box} from "@mui/material";
import React from "react";
import { PorfolioList } from "../settings/carouselList";
import Slider from "react-slick";

//-----------------------------------------------------

const CusGrid = styled(Grid)(()=>({
    marginTop:'20px',
    marginBottom: '20px',
}));


//-----------------------------------------------------

const settings = {
    dots: true,
    infinite: true,
    arrows:true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,responsive: [
        {
          breakpoint: 900,
          settings: {
            arrows:false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows:false,
            dots: false
            
          }
        },
      ]

};

//-----------------------------------------------------

function Porfolio() {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <CusGrid container columnSpacing={2} sx={{ order: { xs: 1, md: 2 } }}>
               
                    <Grid xs={0} md={3}>
                       
                    </Grid>
                    <Grid xs={12} md={6}>
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_c1dtgznx.json"
                            background="transparent" loop autoplay></lottie-player>
                    </Grid>
                    <Grid xs={0} md={3}>
                       
                    </Grid>
                </CusGrid>
            </Container>
            <Box sx={{
                background: 'rgba(58,56,61, 0.05)',
                padding:'70px 0',
                marginBottom:'70px'
            }}>
            <Container maxWidth='lg'>
                <Box component='h2'
                    sx={{
                        textAlign:'center',
                        margin:'0px 0 50px',
                    }}
                > Implemented Projects</Box>
                <Slider {...settings} className="carouselPorfolio">
                    {PorfolioList.map((item, index) => (
                        <Box key={index} sx={{
                            display: 'flex!important',
                            justifyContent: 'center',
                        }}>
                            <img src={item.src} alt={item.title} width='100%' />
                        </Box>
                    ))}
                </Slider>
            </Container>
            </Box>
        </React.Fragment>
    );
}
export default Porfolio
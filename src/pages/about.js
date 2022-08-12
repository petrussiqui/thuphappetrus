import React from "react";
import { Box, Container, Grid, styled } from "@mui/material";
import * as CusConst from '../settings/constants';


const CusGrid = styled(Grid)(() => ({
    margin: '20px 0 20px -8px',
    "& h1": {
        textAlign: 'center',
        marginTop: '-20px',
        color: CusConst.ACCENT_COLOR,
    },
}));


function About() {
    return (
        <React.Fragment>
            <img src="/petrus-app/img/banner.png" alt="banner" width='100%' />
            <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_d4xlubji.json"
                style={{
                    position: 'absolute',
                    height: ' 100%',
                    top: '0',
                    right: '0',
                    width: '170%',
                }} class="Hidden-Mobile"
                background="transparent" speed="1" loop autoplay></lottie-player>
            <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_d4xlubji.json"
                style={{
                    position: 'absolute',
                    height: ' 100%',
                    top: '0',
                    left: '0',
                    width: '170%',
                }} class="Hidden-Mobile"
                background="transparent" speed="1" loop autoplay></lottie-player>
            <Container maxWidth="lg" sx={{display:'flex',
                            justifyContent:'center',}}>
                        <Box sx={{
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
        </React.Fragment>
    );
}
export default About
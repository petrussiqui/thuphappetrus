import { Box, Button, Container, Grid, styled } from "@mui/material";
import React from "react";
import * as CusConst from '../settings/constants';

const CusGird = styled(Grid)(() => ({
    marginTop: '20px',
    marginBottom: '20px',
    "& h1": {
        textAlign: 'center',
        marginTop: '-20px',
        color: CusConst.ACCENT_COLOR,
    },
}));
const CusGirdContent = styled(Grid)(() => ({
        display: 'flex',
        flexFlow: 'wrap',
        alignContent: 'center',
        justifyContent:'center',
}));
const CusButton = styled(Button)(() => ({
    background:"linear-gradient(45deg, #18B8C6 5%, #41D1DC 80%, #9CE2EA 100%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    marginLeft:'10px',
    marginRight:'10px',
    minWidth:'130px',

}));

function Homepage() {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <CusGird container columnSpacing={2} sx={{
                    order: { xs: 1, md: 2 },
                    minHeight: { xs: 'none', md: '85vh' }
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
                                fontSize: { md: '44px', xs: '24px' },
                                letterSpacing: { md: '3px', xs: '1px' },
                            }}>
                                I'm Petrus Sĩ Quí
                            </Box>
                            <Box sx={{textAlign:'center'}}>
                            <CusButton componentType='a' variant="contained" href="#section2">
                                Read More
                            </CusButton>
                            <CusButton variant="contained">
                                Contact
                            </CusButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={5} sx={{
                        display: 'flex',
                        flexFlow: 'wrap',
                        alignContent: 'center',
                    }}>
                        <Box>
                            <img src='/petrus-app/img/me.png' alt="Person" width='100%'
                                style={{ borderRadius: '100% 100% 50% 50%', float: 'right' }}
                            />
                        </Box>
                    </Grid>

                </CusGird>
                <CusGird container columnSpacing={2} sx={{ order: { xs: 1, md: 2 } }} id='section2'>
                    <Grid xs={12} md={6}>
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_gnb0jsok.json"
                            background="transparent" speed="1"
                            loop autoplay></lottie-player>
                    </Grid>
                    <CusGirdContent xs={12} md={6} sx={{
                        
                    }}>
                        <Box component='h2'>
                            I am a Front-End Programmer
                        </Box>
                    </CusGirdContent>
                </CusGird>
                <CusGird container columnSpacing={2} sx={{ order: { xs: 1, md: 2 } }}>
                    <CusGirdContent xs={12} md={6} >
                        <Box component='h2'>
                            I am a Calligrapher
                        </Box>
                    </CusGirdContent>
                    <Grid xs={12} md={6}>
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_iqhd0uv0.json"
                            background="transparent" speed="1"
                            loop autoplay></lottie-player>
                    </Grid>
                </CusGird>

            </Container>
        </React.Fragment>
    );
}
export default Homepage
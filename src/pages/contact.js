import { Box, Container, Grid, styled, TextField } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import * as CusConst from '../settings/constants';

const CusGrid = styled(Grid)(() => ({
    marginTop: '20px',
    marginBottom: '20px',
}));
const CusGridContent = styled(Grid)(() => ({

    padding: '0px 20px ',
}));
const CusBoxForm = styled(Box)(() => ({
    marginTop: '20px',
    marginBottom: '20px',
}));

const CusBoxIframe = styled(Box)(({theme}) => ({
    margin:'70px 0',
    [theme.breakpoints.down('md')]:{
        margin:'30px 0',
    },
    '& iframe': {
        width: '100%',
        height: '500px',
        border: 'none',
        clipPath: 'polygon(50% 0%, 90% 10%, 100% 35%, 100% 70%, 100% 100%, 50% 100%, 10% 90%, 0% 70%, 0% 35%, 0 0)'

    }
}));

const CusTextField = styled(TextField)(() => ({
    width: '100%',
    marginBottom: '20px',
    '& label.Mui-focused': {
        color: CusConst.TEXT_COLOR,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: CusConst.SECONDAEY_COLOR,
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: CusConst.SECONDAEY_COLOR,
        },
        '&.Mui-focused fieldset': {
            borderColor: CusConst.SECONDAEY_COLOR,
        },
    },
}));

function Contact() {
    return (
        <React.Fragment>
            <img src="/petrus-app/img/top3.png" alt='bgtop' style={{
            width:'100%',
            position:'absolute',
            zIndex:'-1',
        }}/>
            <Container maxWidth="lg">
                <Box component='h2' sx={{textAlign:'center', fontSize:{xs:'24px',md:'40px'}}}>
                    Contact Me
                </Box>
                <CusGrid container columnSpacing={2} sx={{ order: { xs: 1, md: 2 } }}>
                    <CusGridContent xs={12} md={5}>

                        <CusBoxForm component='form' autoComplete="off">
                            <CusTextField required id="contactName" label="Your Name" variant="outlined" size="small" />
                            <CusTextField required id="contactPhone" label="Your Phone" variant="outlined" type="tel" size="small" />
                            <CusTextField required id="contactMail" label="Your Email" variant="outlined" type="email" size="small" />
                            <CusTextField id="contactTitle" label="Title" variant="outlined" size="small" />
                            <CusTextField id="contactContent" label="Content" variant="outlined" size="small" />
                            <CusConst.CUS_BUTTON_BLUE variant="contained" sx={{ width: '100%', margin: '0' }}> Submit</CusConst.CUS_BUTTON_BLUE>
                        </CusBoxForm>
                    </CusGridContent>
                    <Grid xs={12} md={7}>
                        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json"
                            background="transparent" loop autoplay></lottie-player>
                    </Grid>
                </CusGrid>
            </Container>
            <Container maxWidth="lg">
                <CusBoxIframe>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8095.971881642214!2d106.7192626022471!3d10.798221391816913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%20TVGB%2081!5e0!3m2!1svi!2s!4v1660127352064!5m2!1svi!2s"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </CusBoxIframe>
            </Container>
        </React.Fragment>
    );
}
export default Contact
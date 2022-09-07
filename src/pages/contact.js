import { Box, Container, Grid, styled, TextField } from "@mui/material";
import React from "react";
import * as CusConst from '../settings/constants';
import LazyLoad from 'react-lazyload';

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

const CusBoxIframe = styled(Box)(({ theme }) => ({
    margin: '70px 0',
    [theme.breakpoints.down('md')]: {
        margin: '30px 0',
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
        borderBottomColor: CusConst.SECONDARY_COLOR,
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: CusConst.SECONDARY_COLOR,
        },
        '&.Mui-focused fieldset': {
            borderColor: CusConst.SECONDARY_COLOR,
        },
    },
}));

function Contact() {
    return (
        <React.Fragment>
            <img src="/thuphappetrus/img/top3.png" alt='bgtop' style={{
                width: '100%',
                position: 'absolute',
                zIndex: '-1',
            }} />
            <Container maxWidth="lg">
                <Box component='h2' sx={{ textAlign: 'center', fontSize: { xs: '24px', md: '40px' } }}>
                    Contact Me
                </Box>
                <CusGrid container columnSpacing={2} sx={{ order: { xs: 1, md: 2 } }}>
                    <CusGridContent item xs={12} md={5}>

                        <CusBoxForm component='form' autoComplete="off">
                            <CusTextField required id="contactName" label="Your Name" variant="outlined" size="small" />
                            <CusTextField required id="contactPhone" label="Your Phone" variant="outlined" type="tel" size="small" />
                            <CusTextField required id="contactMail" label="Your Email" variant="outlined" type="email" size="small" />
                            <CusTextField id="contactTitle" label="Title" variant="outlined" size="small" />
                            <CusTextField id="contactContent" label="Content" variant="outlined" size="small" />
                            <CusConst.CUS_BUTTON_BLUE variant="contained" sx={{ width: '100%', margin: '0' }}> Submit</CusConst.CUS_BUTTON_BLUE>
                        </CusBoxForm>
                    </CusGridContent>
                    <Grid item xs={12} md={7}>
                        <lottie-player 
                        // src="https://assets7.lottiefiles.com/packages/lf20_1cazwtnc.json"
                        src="https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json"
                            background="transparent" loop autoplay></lottie-player>
                    </Grid>
                </CusGrid>
            </Container>
            <Container maxWidth="lg">
                <LazyLoad>
                    <CusBoxIframe>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.244716000425!2d106.7428766!3d10.8257575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1892138de92e1cac!2zVGjGsCBQaMOhcCBQZXRydXM!5e0!3m2!1svi!2s!4v1662546661399!5m2!1svi!2s">
                        
                    </iframe>
                    </CusBoxIframe>
                </LazyLoad>
            </Container>
        </React.Fragment>
    );
}
export default Contact
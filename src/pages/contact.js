import {  Container, Grid, styled } from "@mui/material";
import React from "react";

const CusGird = styled(Grid)(()=>({
    marginTop:'20px',
    marginBottom: '20px',
}));

function Contact() {
    return (
        <React.Fragment>
        <Container maxWidth="lg">
            <CusGird container columnSpacing={2} sx={{ order: { xs: 1, md: 2 } }}>
           
                <Grid xs={12} md={6}>
                  
                </Grid>
                <Grid xs={12} md={6}>
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json"
                        background="transparent" loop autoplay></lottie-player>
                </Grid>
                   
            </CusGird>
        </Container>
    </React.Fragment>
    );
}
export default Contact
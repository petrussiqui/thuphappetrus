

import {  Container, Grid, styled } from "@mui/material";
import React from "react";

const CusGrid = styled(Grid)(()=>({
    marginTop:'20px',
    marginBottom: '20px',
}));

function Porfolio() {
    return (
        <React.Fragment>
            <Container maxWidth="xl">
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
        </React.Fragment>
    );
}
export default Porfolio
import { Box, Container, Grid, IconButton, styled } from "@mui/material";
// import { NavLink } from "react-router-dom";
import * as CusConst from '../settings/constants';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


const CusGird = styled(Grid)(() => ({
    marginTop: '20px',
    marginBottom: '20px',
    "& hr": {
        border: `1px solid ${CusConst.SECONDAEY_COLOR}`,
        marginBottom:'70px'
    },
}));
function Footer() {
    return (
        <Container maxWidth="xl" sx={{
            textAlign: 'center',
        }}>
            <CusGird container columnSpacing={2} sx={{ alignItems: 'center' }}>
                <Grid xs={0} md={4}>
                    <hr />
                </Grid>
                <Grid xs={12} md={4}>
                    <img
                        src="/petrus-app/img/logo550tranparent.png"
                        alt="Logo"
                        width='250px'
                    />
                    <Box component="p">Spread Warmth and Positive Energy</Box>
                </Grid>
                <Grid xs={0} md={4}>
                    <hr />
                </Grid>
            </CusGird>
            <CusGird container columnSpacing={2} sx={{ alignItems: 'center' }}>
                <Grid xs={12} md={4}>
                <Box component="p">Contact</Box> 
                </Grid>
                <Grid xs={0} md={4}>
                    
                </Grid>
                <Grid xs={12} md={4}>
                <Box component="p">Social</Box> 
                  <IconButton>
                    <FacebookRoundedIcon></FacebookRoundedIcon>
                  </IconButton>
                  <IconButton>
                    <YouTubeIcon></YouTubeIcon>
                  </IconButton>
                  <IconButton>
                    <InstagramIcon></InstagramIcon>
                  </IconButton>
                </Grid>
            </CusGird>

        </Container>
    );
}
export default Footer
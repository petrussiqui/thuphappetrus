import { Box, Container, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
// import { NavLink } from "react-router-dom";
import * as CusConst from '../settings/constants';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import React from "react";


const CusGrid = styled(Grid)(() => ({
    marginTop: '20px',
    "& hr": {
        border: `1px solid ${CusConst.SECONDAEY_COLOR}`,
        marginBottom: '70px'
    },
}));
const CusIconButton = styled(IconButton)(() => ({
    marginBottom: '50px',
    color:CusConst.SECONDAEY_COLOR,
    '&.MuiSvgIcon-root': {
        
    },

}));
const CusListItemIcon = styled(ListItemIcon)(() => ({
    color: CusConst.SECONDAEY_COLOR,
}));

//Custom Tag with scss and responsive
const CusGridContent = styled(Grid)(({ theme }) => ({
    // display: 'flex',
    // flexFlow: 'wrap',
    textAlign: 'center',
    justifyContent: 'stretch',
    paddingLeft: '30px',
    [theme.breakpoints.down('md')]: {
        flexFlow:'column',
        paddingRight: '30px',
        justifyContent: 'center',
    },
    '& h3': {
        fontSize: '20px',
        color: CusConst.ACCENT_COLOR,
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    '& span': {
        fontSize: '15px',
        lineHeight: '1.6em',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'justify',
        },
    },
    '& a': {
        fontSize: '15px',
        lineHeight: '1.6em',
        textDecoration:'none',
        '& span':{
        color:CusConst.TEXT_COLOR,
        }
    },
}));

//---------------------------------------------------------

const contacts = [

    {
        icon: <LocalPhoneRoundedIcon />,
        text: '0939 800 713',
        link: 'tel:0939800713'
    },
    {
        icon: <EmailIcon />,
        text: 'petersiqui@gmail.com',
        link: 'mailto:petersiqui@gmail.com'
    },
    {
        icon: <LocationOnIcon />,
        text: 'Binh Thanh District, HCM City',
        link: 'https://goo.gl/maps/CPcdGZhyXg3EqTVL7'
    },
]

function Footer() {
    return (
        <Box sx={{ position: 'relative' }}>
            <img src="/petrus-app/img/bottom3.png" width='100%' alt="bgfooter"
                style={{ position: 'absolute', bottom: '0', zIndex: '-1' }} />
            <Container maxWidth="xl" >
                <CusGrid container columnSpacing={2} sx={{ alignItems: 'center' }}>
                    <Grid xs={0} sm={2} md={4} sx={{ display: { xs: 'none', sm: 'unset' } }}>
                        <hr />
                    </Grid>
                    <Grid xs={12} sm={8} md={4} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexFlow: 'column',
                        '& img': {
                            width:{xs:'160px', md:'250px'}
                        }
                    }}>
                        <img
                            src="/petrus-app/img/logo550tranparent.png"
                            alt="Logo"
                            width='250px'
                        />
                        <Box component="p" sx={{ fontSize: '15px' }}>Spread Warmth and Positive Energy</Box>
                    </Grid>
                    <Grid xs={0} sm={2} md={4} sx={{ display: { xs: 'none', sm: 'unset' } }}>
                        <hr />
                    </Grid>
                </CusGrid>
            </Container>
            <Container maxWidth="lg" >
                <CusGrid container columnSpacing={2} sx={{ alignItems: 'flex-start', marginTop: { md: '-90px', xs: '0' }, paddingBottom: { md: '50px', xs: '0px' } }}>

                    <CusGridContent xs={12} md={4}>
                        <Box component="h3">Contact</Box>
                        <List>
                            {contacts.map((contact, index) =>
                                <Box component='a' href={contact.link}>
                                    <ListItem key={index} >
                                        <CusListItemIcon>
                                            {contact.icon}
                                        </CusListItemIcon>
                                        <ListItemText primary={contact.text} />
                                    </ListItem>
                                </Box>
                            )}
                        </List>
                    </CusGridContent>
                    <Grid xs={0} md={4}>
                    </Grid>
                    <CusGridContent xs={12} md={4} sx={{

                    }}><Box component="h3">Social</Box>
                        <CusIconButton aria-label="Facebook" href='https://fb.com' target='_blank'>
                            <FacebookRoundedIcon></FacebookRoundedIcon>
                        </CusIconButton>
                        <CusIconButton aria-label="Youtube" href='https://youtube.com' target='_blank'>
                            <YouTubeIcon></YouTubeIcon>
                        </CusIconButton>
                        <CusIconButton aria-label="Instagram" href='https://instagram.com' target='_blank'>
                            <InstagramIcon></InstagramIcon>
                        </CusIconButton>
                    </CusGridContent>
                </CusGrid>
            </Container>
        </Box>
    );
}
export default Footer
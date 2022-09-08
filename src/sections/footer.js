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
// import {MessengerFB} from "./messengerFB";


const CusGrid = styled(Grid)(() => ({
    marginTop: '20px',
    "& hr": {
        border: `1px solid ${CusConst.SECONDARY_COLOR}`,
        marginBottom: '70px'
    },
}));
const CusIconButton = styled(IconButton)(() => ({
    marginBottom: '20px',
    color: CusConst.SECONDARY_COLOR,
    '&.MuiSvgIcon-root': {

    },

}));
const CusListItemIcon = styled(ListItemIcon)(() => ({
    color: CusConst.SECONDARY_COLOR,
}));

//Custom Tag with scss and responsive
const CusGridContent = styled(Grid)(({ theme }) => ({
    // display: 'flex',
    // flexFlow: 'wrap',
    textAlign: 'center',
    justifyContent: 'stretch',
    paddingLeft: '30px',
    [theme.breakpoints.down('md')]: {
        flexFlow: 'column',
        paddingRight: '30px',
        justifyContent: 'center',
    },
    '& h3': {
        fontSize: '20px',
        color: CusConst.TEXT_COLOR,
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
        textDecoration: 'none',
        '& span': {
            color: CusConst.TEXT_COLOR,
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
        link: 'https://goo.gl/maps/a4mN3P9kipA5swSaA'
    },
]

function Footer() {
    return (
        <Box sx={{ position: 'relative' }}>
            <img src="/thuphappetrus/img/bottom3.png" width='100%' alt="bgfooter"
                style={{ position: 'absolute', bottom: '0', zIndex: '-1' }} />
            <Container maxWidth="xl" >
                <CusGrid container columnSpacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={0} sm={2} md={4} sx={{ display: { xs: 'none', sm: 'unset' } }}>
                        <hr />
                    </Grid>
                    <Grid item xs={12} sm={8} md={4} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexFlow: 'column',
                        '& img': {
                            filter: 'hue-rotate(10deg)',
                            width: { xs: '80px', md: '120px' }
                        }
                    }}>
                        <img
                            src="/thuphappetrus/thuphappetrus.png"
                            alt="Logo"
                            width='150px'
                        />
                        <Box component="p" sx={{ fontSize: '15px' }}>Art and Messages Of Life</Box>
                    </Grid>
                    <Grid item xs={0} sm={2} md={4} sx={{ display: { xs: 'none', sm: 'unset' } }}>
                        <hr />
                    </Grid>
                </CusGrid>
            </Container>
            <Container maxWidth="lg" >
                <CusGrid container columnSpacing={2} sx={{ alignItems: 'flex-start', marginTop: { md: '-90px', xs: '0' }, paddingBottom: { md: '50px', xs: '0px' } }}>

                    <CusGridContent item xs={12} md={4}>
                        <Box component="h3">Contact</Box>
                        <List>
                            {contacts.map((contact, index) =>
                                <Box component='a' href={contact.link} key={index}>
                                    <ListItem>
                                        <CusListItemIcon>
                                            {contact.icon}
                                        </CusListItemIcon>
                                        <ListItemText primary={contact.text} />
                                    </ListItem>
                                </Box>
                            )}
                        </List>
                    </CusGridContent>
                    <Grid item xs={0} md={4}>
                    </Grid>
                    <CusGridContent item xs={12} md={4} sx={{}}>
                        <Box component="h3">Social</Box>
                        <CusIconButton aria-label="Facebook" href='https://fb.com/thuphappetrus' target='_blank'>
                            <FacebookRoundedIcon></FacebookRoundedIcon>
                        </CusIconButton>
                        <CusIconButton aria-label="Youtube" href='https://youtube.com' target='_blank'>
                            <YouTubeIcon></YouTubeIcon>
                        </CusIconButton>
                        <CusIconButton aria-label="Instagram" href='https://instagram.com/petrus_si_qui' target='_blank'>
                            <InstagramIcon></InstagramIcon>
                        </CusIconButton>
                        <div className="fb-page" data-href="https://www.facebook.com/thuphappetrus" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/thuphappetrus" className="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/thuphappetrus">Thư Pháp Petrus</a>
                            </blockquote>
                        </div>
                    </CusGridContent>
                </CusGrid>
            </Container>
        </Box>
    );
}
export default Footer
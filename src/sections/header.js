import { AppBar, Container, styled, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import * as CusConst from '../settings/constants';


const pages = [
    { pageLink: '/petrus-app/', pageName: 'Home' },
    { pageLink: '/petrus-app/about-me', pageName: 'About Me' },
    { pageLink: '/petrus-app/porfolio/', pageName: 'Porfolio' },
    { pageLink: '/petrus-app/contact/', pageName: 'Contact' },
];
const CusNavLink = styled(NavLink)(() => ({
    padding: '10px',
    textDecoration: 'none',
    color: CusConst.SECONDAEY_COLOR,
    display: 'block',
    marginLeft:'40px',
    "&:after": {
        display: 'block',
        content: '""',
        borderBottom: `2px solid ${CusConst.SECONDAEY_COLOR}`,
        color: CusConst.SECONDAEY_COLOR,
        transition: 'transform 250ms ease-in-out',
        transform: 'scaleX(0)',
        position: 'relative',
        bottom: '-10px',
        marginLeft: '-10px',
        marginRight: '-10px',
    },
    "&.active": {
        color: CusConst.SECONDAEY_COLOR,
        "&:after": {
            transform: 'scaleX(1)',
        }
    },
    "&:hover": {
        color: CusConst.SECONDAEY_COLOR,
        "&:after": {
            transform: 'scaleX(1)',
        }
    }
}));

function Header() {
    return (
        <AppBar position="sticky" sx={{
            background: 'white',
            boxShadow:'0 3px 5px 2px rgb(58 56 61 / 5%)'
        }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ my: 1 }}>
                    <Box component='a' href="/petrus-app/">
                    <img
                        src="/petrus-app/img/logo550tranparent.png"
                        alt="Logo"
                        width='100px'
                    /></Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) =>
                            <CusNavLink
                                key={page.pageName}
                                to={page.pageLink}
                            >
                                {page.pageName}
                            </CusNavLink>
                        )}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header
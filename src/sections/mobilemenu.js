import * as React from 'react';
import { useState } from 'react';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { IconButton, List, Box, Drawer, styled, ButtonGroup, Button } from '@mui/material';
import Menu from './menu';
import * as CusConst from '../settings/constants';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useDispatch } from "react-redux";
import { en } from '../languages/en';
import { vn } from '../languages/vn';
import { changeLang } from "../store/actions/appActions";


const CusIconButton = styled(IconButton)(() => ({
    marginBottom: '50px',
    color: CusConst.SECONDARY_COLOR,
    '&.MuiSvgIcon-root': {

    },

}));
const CusBox = styled(Box)(({ theme }) => ({
    width: '350px',
    [theme.breakpoints.down('md')]: {
        width: '80vw',
    }
}))
const CusDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        justifyContent: 'center',
        backgroundImage: 'url(/petrus-app/img/right.png)',
        backgroundRepeat: 'no-repeat',
        '& ul': {
            display: ' flex',
            flexFlow: 'column',
            alignItems: 'start',
            '& a': {
                minWidth: '30%',
                marginLeft: '30%',
                fontSize: '20px',
                marginBottom: '20px',
                textAlign: 'center'
            }
        }
    }

}))

export default function MobileMenu() {
    const dispatch = useDispatch()
    const handleChange = (newLangCode, newLangLibrary) => {
        setState(!state);
        dispatch(
            changeLang({
              langCode: newLangCode,
              langLibrary: newLangLibrary,
            })
          );
        localStorage.setItem("langCode", newLangCode);
    }



    const [state, setState] = useState(false);

    const toggleDrawer = () => (e) => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
        }
        setState(!state);
    };

    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer()}
                sx={{ color: CusConst.SECONDARY_COLOR }}
            >
                <WidgetsRoundedIcon></WidgetsRoundedIcon>
            </IconButton>
            <CusDrawer
                anchor={'right'}
                open={state}
                onClose={toggleDrawer()}

            >
                <CusBox
                    onClick={toggleDrawer()}
                    onKeyDown={toggleDrawer()}
                >
                    <List>
                        <Menu></Menu>
                    </List>
                </CusBox>
                <Box sx={{
                    textAlign: 'center',
                    justifyContent: 'stretch',
                    padding: '0px 5px',
                }}>
                    <ButtonGroup variant="text" aria-label="text button group" sx={{'& button':{ color: CusConst.SECONDARY_COLOR, borderColor: `${CusConst.SECONDARY_COLOR}!important`}}}>
                            <Button onClick={() => handleChange('en', en)}>EN</Button>
                            <Button onClick={() => handleChange('vn', vn)}>VN</Button>
                        </ButtonGroup>
                        <br/>
                    <CusIconButton aria-label="Facebook" href='https://fb.com' target='_blank'>
                        <FacebookRoundedIcon></FacebookRoundedIcon>
                    </CusIconButton>
                    <CusIconButton aria-label="Youtube" href='https://youtube.com' target='_blank'>
                        <YouTubeIcon></YouTubeIcon>
                    </CusIconButton>
                    <CusIconButton aria-label="Instagram" href='https://instagram.com' target='_blank'>
                        <InstagramIcon></InstagramIcon>
                    </CusIconButton>
                </Box>
            </CusDrawer>
        </React.Fragment>
    );
}
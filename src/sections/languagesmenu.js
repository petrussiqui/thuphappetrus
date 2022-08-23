import React, { useState } from "react";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { Button, Menu, MenuItem } from '@mui/material';
import { useDispatch } from "react-redux";
import { en } from '../languages/en';
import { vn } from '../languages/vn';
import { changeLang } from "../store/actions/appActions";
import * as CusConst from '../settings/constants';


export default function LanguagesMenu() {
    const dispatch = useDispatch()
    const handleChange = (newLangCode, newLangLibrary) => {
        handleClose();
        dispatch(
            changeLang({
              langCode: newLangCode,
              langLibrary: newLangLibrary,
            })
          );
        localStorage.setItem("langCode", newLangCode);
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Button
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <LanguageRoundedIcon sx={{ color: CusConst.SECONDARY_COLOR }} />
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => handleChange('en',en)} >EN</MenuItem>
                <MenuItem onClick={() => handleChange('vn',vn)}>VN</MenuItem>
            </Menu>
        </React.Fragment>
    )
}
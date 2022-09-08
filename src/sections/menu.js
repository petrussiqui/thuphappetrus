import { styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import * as CusConst from '../settings/constants';


const pages = [
    { pageLink: '/thuphappetrus/', pageName: 'Home' },
    { pageLink: '/thuphappetrus/about-me', pageName: 'About Me' },
    { pageLink: '/thuphappetrus/', pageName: 'Blog' },
    { pageLink: '/thuphappetrus/contact/', pageName: 'Contact' },
];
const CusNavLink = styled(NavLink)(() => ({
    padding: '10px',
    textDecoration: 'none',
    color: CusConst.SECONDARY_COLOR,
    display: 'block',
    marginLeft:'40px',
    "&:after": {
        display: 'block',
        content: '""',
        borderBottom: `2px solid ${CusConst.SECONDARY_COLOR}`,
        color: CusConst.SECONDARY_COLOR,
        transition: 'transform 250ms ease-in-out',
        transform: 'scaleX(0)',
        position: 'relative',
        bottom: '-10px',
        marginLeft: '-10px',
        marginRight: '-10px',
    },
    "&.active": {
        color: CusConst.SECONDARY_COLOR,
        "&:after": {
            transform: 'scaleX(1)',
        }
    },
    "&:hover": {
        color: CusConst.SECONDARY_COLOR,
        "&:after": {
            transform: 'scaleX(1)',
        }
    }
}));
export default function Menu() {

    return (
        <React.Fragment>
            {pages.map((page) =>
                <CusNavLink
                    key={page.pageName}
                    to={page.pageLink}
                >
                    {page.pageName}
                </CusNavLink>
            )}
        </React.Fragment>
    )
}
import { Button, styled } from "@mui/material";

//COLOR
export const PRIMARY_COLOR = '#41D1DC';
export const SECONDARY_COLOR = '#18B8C6';
export const THIRD_COLOR = '#9CE2EA';
export const TEXT_COLOR = '#3A383D';
export const TEXT2_COLOR = '#231F20';
export const ACCENT_COLOR = '#DC4C41';
//D10300 
//DC4C41
//E74739
export const CUS_BUTTON_BLUE = styled(Button)(() => ({
    background:"linear-gradient(45deg, #18B8C6 5%, #41D1DC 80%, #9CE2EA 100%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    marginLeft:'10px',
    marginRight:'10px',
    minWidth:'130px',
}));

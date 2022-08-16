import { Box } from '@mui/material';
import React from 'react';

let chatbox
export const MessengerFB = () => {
    return (
    <React.Fragment>
        <Box id="fb-root"></Box>
        <Box id="fb-customer-chat" className="fb-customerchat"></Box>
            {(
            chatbox = document.getElementById('fb-customer-chat'),
            chatbox.setAttribute("page_id", "108446070953939"),
            chatbox.setAttribute("attribution", "biz_inbox")
            )}

        {((d, s, id) => {
            let js, fjs = d.getElementsByTagName(s)[0]
            if (d.getElementById(id)) return
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }, (document, 'script', 'facebook-jssdk'))}
    </React.Fragment>
    )
}


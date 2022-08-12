import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { CalligraphyList } from "../settings/carouselList";
import { PRIMARY_COLOR} from "../settings/constants";


function About() {
    return (
        <React.Fragment>
            <img src="/petrus-app/img/banner.png" alt="banner" width='100%' />
            <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_d4xlubji.json"
                style={{
                    position: 'absolute',
                    height: ' 100%',
                    top: '-10%',
                    right: '0',
                    width: '170%',
                }}
                class="Hidden-Mobile"
                background="transparent" speed="1" loop autoplay></lottie-player>
            <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_d4xlubji.json"
                style={{
                    position: 'absolute',
                    height: ' 100%',
                    top: '-10%',
                    left: '0',
                    width: '170%',
                }}
                class="Hidden-Mobile"
                background="transparent" speed="1" loop autoplay></lottie-player>

            <Container>
            <Box component='h1'
                    sx={{
                        textAlign:'center',
                        margin:'50px 0',
                        color: PRIMARY_COLOR, 
                    }}
                > Gallery</Box>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {CalligraphyList.map((item) => (
                        <ImageListItem key={item.src}>
                            <img
                                src={`${item.src}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </React.Fragment>
    );
}
export default About
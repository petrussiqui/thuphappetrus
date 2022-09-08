import { Box, Container, Tabs, Tab } from "@mui/material";
import React from "react";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../settings/constants";
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
import AbcRoundedIcon from '@mui/icons-material/AbcRounded';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import '../styles/Animation.css'
import Gallery from "../components/Gallery";
import { useSelector } from "react-redux";


function Calligraphy() {
    const langLibrary = useSelector(state => state.languages.langLibrary)
    const [tabActive, setTabActive] = React.useState('');

    const handleChange = (event, newValue) => {
        setTabActive(newValue);
    };
    return (
        <React.Fragment>
            <img src="/thuphappetrus/img/banner3.png" alt="banner" width='100%' />
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_z5avtirw.json"
                style={{
                    position: 'absolute',
                    height: ' 350px',
                    top: '70px',
                    right: '0',
                    width: '170%',
                }}
                class="Hidden-Mobile animate__animated animate__fadeInUp"
                background="transparent" speed="1" loop autoplay></lottie-player>
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_z5avtirw.json"
                style={{
                    position: 'absolute',
                    height: ' 350px',
                    top: '70px',
                    left: '0',
                    width: '170%',
                }}
                class="Hidden-Mobile animate__animated animate__fadeInUp"
                background="transparent" speed="1" loop autoplay></lottie-player>
            {/* <Box component='h1'
                sx={{
                    position: 'absolute',
                    width: '100%',
                    top: { md: '200px', xs: '70px' },
                    fontSize: { md: '56px', xs: '32px' },
                    fontFamily: 'fantasy',
                    textAlign: 'center',
                    margin: '50px 0',
                    color: PRIMARY_COLOR,
                }} className='animate__animated animate__fadeIn'
            > {langLibrary.calligraphy}</Box> */}
            <Box sx={{
                background: '#E7F7F9',
                marginTop: '-3px'

            }}>
                <Container maxWidth="lg">
                    <Tabs
                        value={tabActive}
                        onChange={handleChange}
                        aria-label="icon tabs"
                        sx={{

                            '& .MuiTabs-flexContainer':
                            {
                                justifyContent: { md: 'center', xs: 'flex-start' },
                                overflowX: { md: 'hidden', xs: 'auto' },
                                '::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            },
                            '& button': {
                                color: SECONDARY_COLOR
                            },
                            '& .Mui-selected': {
                                color: 'white!important',
                                background: "linear-gradient(45deg, #18B8C6 5%, #41D1DC 80%, #9CE2EA 100%)"
                            }
                        }}
                        indicatorColor='none'
                    >
                        <Tab icon={<CollectionsBookmarkRoundedIcon />} value='' iconPosition="start" label="All Calligraphies" />
                        <Tab icon={<CropOriginalRoundedIcon />} value='frames' iconPosition="start" label="Frames" />
                        <Tab icon={<BubbleChartRoundedIcon />} value='pebbles' iconPosition="start" label="Pebbles" />
                        <Tab icon={<ContentPasteRoundedIcon />} value='papers' iconPosition="start" label="Papers" />
                        <Tab icon={<AbcRoundedIcon />} value='others' iconPosition="start" label="The others" />
                    </Tabs>
                </Container>
            </Box>
            <Container maxWidth="lg">
                <Gallery filter={tabActive} />
                <div className="fb-comments"
                    data-href="https://petrussiqui.github.io/thuphappetrus/"
                    data-width="100%" data-numposts="5">

                </div>
                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_mb9ka7yz.json"
                    class="animate__animated animate__fadeIn" background="transparent" speed="1" loop autoplay
                    style={{
                        height: '50%',
                        width: '50%',
                        padding: '0 25%',
                    }}
                ></lottie-player>
            </Container>
        </React.Fragment>
    );
}
export default Calligraphy
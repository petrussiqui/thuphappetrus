import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Logo from "components/common/Logo";
import useResponsive from "hooks/useResponsive";
import { useAppSelector } from "store/hooks";
import { EndBox, FooterBox } from "./components/FooterStyled";
import Social from "./components/Social";
import Download from "./components/Download";
const docList = {
  label: "DOC",
  key: "document",
  content: [
    {
      title: "Whitepaper",
      key: "whitepaper",
      url: "https://docs.ssprint.io/introduction/download-application",
    },
    // {
    //   title: "Lite Paper",
    //   key: "litepaper",
    //   url: "https://files.stepwatch.io/docs/litepaper-en.pdf",
    // },
    {
      title: "Terms of use",
      key: "terms_of_use",
      url: "https://docs.google.com/document/d/1ZEFjpQob0HFqEPxxvAoE2F-ucM3d0bbPah8iLMRkm4c/edit",
    },
    {
      title: "Privacy Policy",
      key: "privacy_policy",
      url: "https://docs.google.com/document/d/1-PT6LsBO55sC3Z1ptF8xl4jJ_jLtvAESFMbBzc-Sdfo/edit?usp=sharing",
    },
  ],
};
const support = {
  label: "Contact us",
  key: "contact_us",
  content: [
    {
      title: "contact@stepwatch.io",
      url: "mailto:contact@stepwatch.io",
    },
  ],
};
const join = {
  label: "Join us",
  key: "join_us",
};
export default function Footer() {
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  const isMobile = useResponsive("down", "sm");
  return (
    <>
      <Box
        sx={{
          background: "var(--linear-primary)",
          height: "1px",
          width: "100%",
        }}
      />
      <FooterBox id='contact'>
        <Container maxWidth={"xl"}>
          <Grid container spacing={isMobile ? 2 : 4}>
            <Grid item xs={12} md={5}>
              <Stack>
                <Logo sx={{ width: isMobile ? "50%" : "auto" }} />

                <Stack direction={"row"} gap={2} mt={isMobile ? 1 : 2}>
                  <a
                    href='https://coinmarketcap.com/currencies/stepwatch/'
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src={"/images/home/coinmarketcap.png"}
                      alt=''
                      height={isMobile ? "48px" : "auto"}
                    />
                  </a>
                  {/* <a
                    href="https://www.coingecko.com/en/coins/stepwatch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={"/images/home/coingecko.png"}
                      alt=""
                      height={isMobile ? "48px" : "auto"}
                    />
                  </a> */}
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={6} md={2}>
              <Typography variant='h6' fontWeight={700} mb={0.5}>
                {library[docList.key] || docList.label}
              </Typography>
              {docList.content.map((item, index) => (
                <a href={item.url} key={index} target='_blank' rel='noreferrer'>
                  <Typography variant='body1' mb={0.5}>
                    {library[item.key] || item.title}
                  </Typography>
                </a>
              ))}
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant='h6' fontWeight={700} mb={0.5}>
                {library[support.key] || support.label}
              </Typography>
              {support.content.map((item, index) => (
                <a href={item.url} key={index} target='_blank' rel='noreferrer'>
                  <Typography variant='body1'>{item.title}</Typography>
                </a>
              ))}
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography variant='h6' fontWeight={700} mb={1}>
                {library[join.key] || join.label}
              </Typography>
              <Social gap={3} />
              <Download />
            </Grid>
          </Grid>
        </Container>
      </FooterBox>
      <EndBox>
        <Container maxWidth={"xl"}>
          <Typography>
            Copyright © 2023 SPLabs Co. LTD | All Rights Reserved
          </Typography>
        </Container>
      </EndBox>
    </>
  );
}

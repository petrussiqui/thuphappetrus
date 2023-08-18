import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { TypographyGradient } from "components/common/CustomTypography";
import useResponsive from "hooks/useResponsive";
import { useAppSelector } from "store/hooks";
import {
  BurnedBox,
  CertikBox,
  HolderBox,
  SectionBox,
  TotalBox,
} from "./HomeStyled";
const content = {
  title: "Explore and Join Your Journey with Sprint",
  info: [
    {
      label: "SWP TOKEN",
      label_key: "swp",
      total: "1,000,000,000",
      burned: "0",
      token: "SWP",
      holder: "2,252",
      contract: "0x53607C4a966f79d3ab1750180E770B0bFD493f46",
      contractLink:
        "https://bscscan.com/token/0x53607C4a966f79d3ab1750180E770B0bFD493f46",
      imgUrl: "/images/home/contract-token.png",
    },
    {
      label: "Watch NFT",
      label_key: "watch_nft",
      total: "48,902",
      burned: "1,863",
      token: "SWA",
      holder: "1,530",
      contract: "0xD8ACFf0EA25E49D47d57ab2472C74c0E2FBBaa27",
      contractLink:
        "https://polygonscan.com/address/0xD8ACFf0EA25E49D47d57ab2472C74c0E2FBBaa27",
      imgUrl: "/images/home/contract-watch.png",
    },
    {
      label: "Box NFT",
      label_key: "box_nft",
      total: "16,103",
      burned: "7,008",
      token: "SWB",
      holder: "595",
      contract: "0xfa144C9D63811D74425Bc1516f220D081486A333",
      contractLink:
        "https://polygonscan.com/address/0xfa144C9D63811D74425Bc1516f220D081486A333",
      imgUrl: "/images/home/contract-box.png",
    },
  ],
};
export default function ProcessInformation() {
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  const isMobile = useResponsive("down", "sm");
  return (
    <SectionBox
      sx={{ backgroundImage: "url('/images/home/section-bg-1.png')" }}
    >
      <Container maxWidth="xl">
        <Stack alignItems={"center"} gap={4}>
          <TypographyGradient
            variant="h4"
            fontWeight={800}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-once="true"
          >
            {content.title}
          </TypographyGradient>
          <CertikBox
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <Typography variant="body1" fontWeight={700}>
              Secured by:
            </Typography>
            <Box position={"relative"}>
              <img src="/images/home/certik.png" alt="" width={"140"} />
              <Box
                component={"img"}
                src="/images/icons/icon-check.png"
                alt=""
                sx={{ position: "absolute", top: "0px", right: "-8px" }}
              />
            </Box>
          </CertikBox>
        </Stack>

        <Grid container spacing={isMobile ? 6 : 2} mt={4}>
          {content.info.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-easing="linear"
              data-aos-once="true"
            >
              <Stack alignItems={"center"} gap={2}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  textTransform={"uppercase"}
                  color={"white"}
                >
                  {library["total"]}
                </Typography>

                <TotalBox>
                  <Typography variant="h6" fontWeight={700}>
                    {item.total}
                  </Typography>
                </TotalBox>
                <Box component={"img"} src={item.imgUrl} alt="" />
                <BurnedBox>
                  <Typography variant="body1" fontWeight={700}>
                    {library["burned"]}:
                  </Typography>
                  <Typography variant="body1" fontWeight={700}>
                    {item.burned}
                  </Typography>
                </BurnedBox>

                <HolderBox>
                  <Typography variant="body1" fontWeight={700}>
                    Holders:
                  </Typography>
                  <Typography variant="body1" fontWeight={700}>
                    {item.holder}
                  </Typography>
                </HolderBox>
                {/* <ContractBox>
                    <Typography
                      variant="body1"
                      fontWeight={700}
                      color={"var(--color-text-title)"}
                    >
                      {item.token}:
                    </Typography>
                    <a
                      href={item.contractLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Typography
                        variant="body1"
                        color={"var(--color-text-title)"}
                      >
                        {item.contract}
                      </Typography>
                    </a>
                    <CopyComponent content={item.contract} />
                  </ContractBox> */}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionBox>
  );
}

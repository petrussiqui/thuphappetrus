import { Box, Container, Stack, Typography } from "@mui/material";
import { TypographyGradient } from "components/common/CustomTypography";
import { ContainerPartner, PartnerLogo, SectionBox } from "./HomeStyled";
import useResponsive from "hooks/useResponsive";
import { useAppSelector } from "store/hooks";
const content = {
  label: "MEET",
  title: "OUR PARTNER",
  info: [
    {
      image: "kucoin",
      link: "https://www.kucoin.com/",
    },
    {
      image: "polygon-studios",
      link: "https://polygonstudios.com/",
    },
    {
      image: "gateio",
      link: "https://www.gate.io/",
    },
    {
      image: "gate_labs",
      link: "https://www.gate.io/",
    },
    {
      image: "dwflabs",
      link: "https://www.dwf-labs.com/",
    },
    {
      image: "mexc",
      link: "http://MEXC.com/",
    },
    {
      image: "polygon",
      link: "https://polygon.technology/",
    },
    {
      image: "splab",
      link: "https://splabs.info/",
    },
    {
      image: "nftb",
      link: "https://nftb.io/",
    },
    {
      image: "gotbit",
      link: "https://gotbit.io/",
    },

    // {
    //   image: "bullperks",
    //   link: "https://bullperks.com/",
    // },
    // {
    //   image: "gamepad",
    //   link: "https://gamespad.io/",
    // },
    // {
    //   image: "bitkeep",
    //   link: "https://bitkeep.com/",
    // },
    // {
    //   image: "pier",
    //   link: "https://www.pier6.kr/",
    // },
    // {
    //   image: "blockwiz",
    //   link: "https://blockwiz.com/",
    // },
    // {
    //   image: "cls",
    //   link: "https://www.cls.global/",
    // },
    // {
    //   image: "prunebomp",
    //   link: "https://prunebomb.com/",
    // },
    // {
    //   image: "earnbox",
    //   link: "",
    // },
    // {
    //   image: "neobus",
    //   link: "http://neobus.io/html/index.jsp",
    // },
    // {
    //   image: "soken",
    //   link: "https://soken.io/",
    // },
    // {
    //   image: "chaindustry",
    //   link: "https://chaindustry.io/",
    // },
    // {
    //   image: "game_tree",
    //   link: "https://gametree.io/",
    // },
    // {
    //   image: "ns_studio",
    //   link: "http://www.nsstudio.co.kr/",
    // },
    // {
    //   image: "sun_miya",
    //   link: "https://sunmiya.club/",
    // },
    // {
    //   image: "black_sqaad",
    //   link: "https://www.blacksquadclassic.io/",
    // },
  ],
};
export default function Partners() {
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  const isMobile = useResponsive("down", "sm");
  return (
    <SectionBox>
      <Container maxWidth='xl'>
        <Stack
          gap={2}
          data-aos='fade'
          data-aos-easing='linear'
          data-aos-once='true'>
          <TypographyGradient variant='body1' fontWeight={800}>
            {library["meet"] || content.label}
          </TypographyGradient>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            fontWeight={700}
            color={"var(--color-text)"}>
            {library["our_partner"] || content.title}
          </Typography>
        </Stack>
        <ContainerPartner>
          {content.info.map((partner, index) => (
            <a
              href={partner.link}
              target='_blank'
              rel='noreferrer'
              key={index}
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-once='true'>
              <PartnerLogo
                src={`./images/partners/${partner.image}.png`}
                alt={""}
              />
            </a>
          ))}
        </ContainerPartner>
        <Stack alignItems={"center"}>
          <Box
            data-aos='flip-right'
            data-aos-easing='linear'
            data-aos-once='true'
            sx={{
              width: "200px",
              height: "2px",
              background: "linear-gradient(95deg, #2EDAD1 0%, #B6D776 100%)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
            }}
          />
        </Stack>
      </Container>
    </SectionBox>
  );
}

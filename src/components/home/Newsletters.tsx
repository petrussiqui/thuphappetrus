import { Box, Container, Stack, Typography } from "@mui/material";
import { NewslettersBox, SectionBox } from "./HomeStyled";
import { TextFieldPrimary } from "components/common/CustomTextField";
import { ButtonLoadingNormal } from "components/common/CustomButton";
import useResponsive from "hooks/useResponsive";
import { useAppSelector } from "store/hooks";

const content = {
  title: "Subscribe",
  title_key: "subscribe",
  subtitle:
    "Subscribe to our newsletter to stay up to date on launches, events, updates and more...",
  subtitle_key: "subscribe_subtitle",
  placeholder_key: "email_address",
};

export default function Newsletters() {
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  const isMobile = useResponsive("down", "sm");
  return (
    <SectionBox sx={{ pt: 10, pb: 18 }}>
      <Container maxWidth="xl">
        <NewslettersBox data-aos="fade" data-aos-once="true">
          <Box>
            <Typography
              variant={isMobile ? "h6" : "h4"}
              fontWeight={600}
              color={"var(--color-white)"}
            >
              {library[content.title_key] || content.title}
            </Typography>
            <Typography variant="body1" mt={0.5} color={"#A9B6B3"}>
              {library[content.subtitle_key] || content.subtitle}
            </Typography>
          </Box>
          <Stack direction={"row"} width={isMobile ? "100%" : "auto"}>
            <TextFieldPrimary
              placeholder={library[content.placeholder_key]}
              sx={{ minWidth: isMobile ? "200px" : "400px" }}
            />
            <ButtonLoadingNormal
              sx={{
                borderRadius: "0",
                background: "var(--linear-primary)",
                padding: isMobile ? "8px 12px!important" : "8px 16px",
                color: "var(--color-accent)",
                height: "56px",
                margin: "12px 0 16px",
                fontSize: isMobile ? "14px" : "16px",
                minWidth: isMobile ? "100px" : "120px",
              }}
            >
              {library[content.title_key]}
            </ButtonLoadingNormal>
          </Stack>
        </NewslettersBox>
      </Container>
    </SectionBox>
  );
}

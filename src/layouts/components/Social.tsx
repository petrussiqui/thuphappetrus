import { Box, Stack, styled } from "@mui/material";
import {
  IconBrandDiscordFilled,
  IconBrandMedium,
  IconBrandTelegram,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";

const TeleBox = styled(Box)(() => ({
  position: "relative",
  background: "var(--linear-primary-10)",
  padding: 4,
  paddingRight: 32,
  borderRadius: "15px",
  cursor: "pointer",
  transition: "all 0.3s",
  "& .dropDown": {
    display: "none",
  },
  "&::before": {
    content: "url('/images/icons/arrow-down.png')",
    position: "absolute",
    top: "50%",
    right: "15%",
    transform: "translateY(-50%)  rotate(270deg)",
    transition: "all 0.3s",
  },
  "&:hover": {
    "&::before": {
      transform: "translateY(-50%) rotate(360deg)",
      transition: "all 0.3s",
    },
    "& .dropDown": {
      display: "block",
    },
  },
}));

const IconBox = styled(Box)(() => ({
  backgroundColor: "var(--color-blue)",
  display: "flex",
  borderRadius: "50%",
  padding: 6,
  "& svg": {
    color: "var(--color-third)",
    width: "18px",
    height: "18px",
  },
  "&:hover": {
    backgroundColor: "var(--color-primary)",
    boxShadow: "var(--shadow-primary)",
  },
}));

const socialList = [
  {
    name: "twitter",
    link: "https://twitter.com/stepwatchglobal",
    iconUrl: "/images/icons/twitter.png",
    icon: <IconBrandTwitterFilled />,
  },
  {
    name: "discord",
    link: "https://discord.gg/KYD5NTKagN",
    iconUrl: "/images/icons/discord.png",
    icon: <IconBrandDiscordFilled />,
  },
  {
    name: "medium",
    link: "https://medium.com/@stepwatchglobal",
    iconUrl: "/images/icons/medium.png",
    icon: <IconBrandMedium />,
  },
  {
    name: "telegram",
    link: "",
    iconUrl: "/images/icons/telegram.png",
    icon: <IconBrandTelegram />,
  },
];
export default function Social({ gap = 2 }: { gap?: number }) {
  return (
    <Stack direction="row" gap={gap} alignItems={"center"}>
      {socialList.map((item, index) =>
        item.link ? (
          <a href={item.link} key={index} target="_blank" rel="noreferrer">
            <IconBox>{item.icon}</IconBox>
          </a>
        ) : (
          <TeleBox key={index}>
            <IconBox>{item.icon}</IconBox>
            <Box
              className={"dropDown"}
              sx={{
                position: "absolute",
                right: "12px",
                top: "20px",
                paddingTop: "20px",
                zIndex: 50,
              }}
            >
              <Stack
                gap={1}
                sx={{
                  background: "var(--color-third)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px 0",
                  border: "1px solid var(--color-primary)",
                  color: "var(--color-text-title)",
                  padding: "16px 32px",
                  " a": {
                    whiteSpace: "nowrap",
                    color: "var(--color-link)",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  },
                }}
              >
                <a
                  href={"https://t.me/stepWatchGlobal"}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  Sprint Global
                </a>
                <a
                  href={"https://t.me/StepWatchAnnounements"}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  Sprint Announements
                </a>
              </Stack>
            </Box>
          </TeleBox>
        )
      )}
    </Stack>
  );
}

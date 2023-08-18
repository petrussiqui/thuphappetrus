import {
  Box,
  Container,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  Stack,
} from "@mui/material";
import { IconArrowBigRight, IconMenu2 } from "@tabler/icons-react";
import { ButtonLoadingPrimary } from "components/common/CustomButton";
import Logo from "components/common/Logo";
import useResponsive from "hooks/useResponsive";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MENU_CONFIG } from "settings/config";
import { HeaderBox, MenuLinkBox, Navbar } from "./components/HeaderStyled";
import Languages from "./components/Languages";
import Social from "./components/Social";
import { useAppSelector } from "store/hooks";

export default function Header() {
  const { setting } = useAppSelector((state) => state);
  const { library } = setting;
  const isMobile = useResponsive("down", "sm");
  const [scrollPositionToggle, setScrollPositionToggle] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const handleOpen = () => {
    setShowSidebar(true);
  };

  const handleClose = () => {
    setShowSidebar(false);
  };

  const [prevScrollpos, setPrevScrollpos] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 75) {
      setScrollPositionToggle(true);
    } else {
      setScrollPositionToggle(false);
    }
    if (isMobile) {
      const header = window.document.getElementById("header");
      if (prevScrollpos > position) {
        if (header !== null) header.style.top = "0";
      } else {
        if (header !== null) header.style.top = "-130px";
      }
      setPrevScrollpos(position);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollpos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderBox id="header">
      <Stack className={scrollPositionToggle ? "sticky-scroll" : "not-scroll"}>
        <Container
          maxWidth={"xl"}
          sx={{
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          <Navbar>
            <Logo />
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Hidden lgDown>
                <MenuLinkBox>
                  {MENU_CONFIG.map((item, index) => (
                    <Box key={index}>
                      {item.externalLink ? (
                        <NavLink
                          to={item.url}
                          className={"menu-item"}
                          target="_blank"
                        >
                          {library[item.key] || item.title}
                        </NavLink>
                      ) : (
                        <Link to={item.url} className={"menu-item"}>
                          {library[item.key] || item.title}
                        </Link>
                      )}
                    </Box>
                  ))}
                  <ButtonLoadingPrimary>
                    <a
                      href="https://ssprint.io"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {" "}
                      Landingpage
                    </a>
                  </ButtonLoadingPrimary>
                  <Social />
                  {/* <Languages /> */}
                </MenuLinkBox>
              </Hidden>

              {/* BUTTON MENU MOBILE */}
              <Hidden lgUp>
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <ButtonLoadingPrimary>
                    <a
                      href="https://ssprint.io"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {" "}
                      Landingpage
                    </a>
                  </ButtonLoadingPrimary>
                  <IconButton
                    sx={{
                      "& svg": {
                        color: "var(--color-primary)",
                      },
                    }}
                    onClick={() => {
                      handleOpen();
                    }}
                  >
                    <IconMenu2 />
                  </IconButton>
                  <Drawer
                    open={showSidebar}
                    anchor="right"
                    onClose={handleClose}
                    sx={{
                      "& .MuiPaper-root": {
                        background: "var(--color-accent)",
                        backdropFilter: "blur(10px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 320,
                      }}
                    >
                      <Box
                        sx={{
                          marginTop: "1rem",
                          marginLeft: "1rem",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IconButton
                          aria-label="CLose menu list"
                          onClick={handleClose}
                          sx={{ color: "var(--color-primary)" }}
                        >
                          <IconArrowBigRight />
                        </IconButton>
                        <Languages />
                      </Box>
                      <List sx={{ color: "white" }}>
                        <Divider
                          sx={{ borderColor: "var(--color-text-secondary-10)" }}
                        />
                        <MenuLinkBox>
                          {MENU_CONFIG.map((item, index) => (
                            <NavLink
                              key={index}
                              to={item.url}
                              className={"menu-item"}
                              onClick={handleClose}
                            >
                              {library[item.key] || item.title}
                            </NavLink>
                          ))}
                        </MenuLinkBox>
                        <Divider
                          sx={{ borderColor: "var(--color-text-secondary-10)" }}
                        />
                        <MenuLinkBox>
                          <Social />
                        </MenuLinkBox>
                      </List>
                    </Box>
                  </Drawer>
                </Stack>
              </Hidden>
            </Box>
          </Navbar>
        </Container>
      </Stack>
    </HeaderBox>
  );
}

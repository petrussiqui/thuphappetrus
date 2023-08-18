import { Box, IconButton, Menu, MenuItem, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch } from "store/hooks";
import { _changeLanguage } from "store/setting/settingActions";

const MenuLanguages = styled(Menu)(() => ({
  "&.MuiPopover-root": {
    border: "none",
  },
  "& .MuiPaper-root": {
    background: "rgb(158, 255, 255, 0.1)!important",
    boxShadow: "none",
    border: "1px solid var(--color-primary)",
    color: "white",
  },
  border: "1px solid black",
  color: "white",
  marginTop: "15px",
  "& a": {
    color: "white",
    textDecoration: "none",
  },
  "& .MuiMenu-paper": {},
}));

const LanguagesButton = styled(IconButton)(() => ({
  borderRadius: "10px",
  "& span": {
    color: "white",
    fontSize: "1rem",
    paddingLeft: "0.5rem",
  },
}));

const LanguagesIcon = styled("img")(() => ({
  height: "25px",
  marginRight: "0.7rem",
  cursor: "pointer",
}));

const languages = [
  {
    name: "English",
    langCode: "en",
    src: "/static/ic_flag_en.svg",
  },
  {
    name: "Korean",
    langCode: "kr",
    src: "/static/ic_flag_kr.svg",
  },
  {
    name: "Japanese",
    langCode: "jp",
    src: "/static/ic_flag_jp.svg",
  },
  {
    name: "Vienamese",
    langCode: "vn",
    src: "/static/ic_flag_vn.svg",
  },
];

export default function Languages({ ...other }) {
  const [anchorElLang, setAnchorElLang] = useState(null);
  const openLang = Boolean(anchorElLang);
  const [currentLang, setCurrentLang] = useState(localStorage.getItem("lang"));

  const dispatch = useAppDispatch();

  const handleClickLang = (event: any) => {
    setAnchorElLang(event.currentTarget);
  };
  const handleCloseMenuLang = () => {
    setAnchorElLang(null);
  };
  const handleChangeLang = (langCode: string) => {
    dispatch(_changeLanguage(langCode));
    setCurrentLang(langCode);
  };

  useEffect(() => {
    dispatch(_changeLanguage(localStorage.getItem("lang")));
  }, [dispatch]);

  return (
    <Box {...other}>
      <LanguagesButton onClick={handleClickLang}>
        <LanguagesIcon
          src={`/static/ic_flag_${currentLang}.svg`}
          alt=""
          sx={{ marginRight: 0 }}
        />
      </LanguagesButton>
      <MenuLanguages
        anchorEl={anchorElLang}
        open={openLang}
        onClose={handleCloseMenuLang}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {languages.map((lang, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleChangeLang(lang.langCode);
              handleCloseMenuLang();
            }}
          >
            <LanguagesIcon src={lang.src} alt={lang.name} />
            {lang.name}
          </MenuItem>
        ))}
      </MenuLanguages>
    </Box>
  );
}

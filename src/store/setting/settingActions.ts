import { AppDispatch } from "store";
import { jp } from "../../languages/jp";
import { kr } from "../../languages/kr";
import { vn } from "../../languages/vn";
import { en } from "languages/en";
import {  SettingStoreConstant } from "./settingConstants";

export const _changeLanguage =
  (lang: string | undefined | null = "en") =>
  (dispatch: AppDispatch) => {
    let library;
    if (lang) localStorage.setItem("lang", lang);
    switch (lang) {
      case "vn":
        library = { ...en, ...vn };
        break;
      case "kr":
        library = { ...en, ...kr };
        break;
      case "jp":
        library = { ...en, ...jp };
        break;
      default:
        localStorage.setItem("lang", "en");
        library = en;
        break;
    }
    dispatch({
      type: SettingStoreConstant.CHANGE_LANGUAGE,
      payload: library,
    });
  };


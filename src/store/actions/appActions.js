
import { CHANGE_LANGUAGES } from "../constants";

export const changeLang = (data) => {
    return {
        type: CHANGE_LANGUAGES,
        payLoad: data
    }
}


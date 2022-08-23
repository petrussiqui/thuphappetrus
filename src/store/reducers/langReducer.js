
import { CHANGE_LANGUAGES } from "../constants";
import { en } from "../../languages/en";

const initState = {
    langCode: 'en',
    langLibrary: en,
}

const LangReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGES:
            return {
                ...state,
                langCode: action.payLoad.langCode,
                langLibrary: action.payLoad.langLibrary,
            }
        default:
            return { ...state };
    }
}

export default LangReducer;

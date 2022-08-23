import { combineReducers } from "redux";
import LangReducer from "./langReducer";

const rootReducer = combineReducers({
    languages: LangReducer,
})

export default rootReducer;

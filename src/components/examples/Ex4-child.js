
import { memo, useContext } from "react";
import { ThemeContext } from "./Ex7.js";

function Ex4Child({onCount4}) {
   
    const theme = useContext(ThemeContext)

    return (
        <div>
            <h2 className={theme} >Component use memo </h2>
            <button onClick={onCount4}>Count</button>
        </div>
    )
}

export default memo(Ex4Child)
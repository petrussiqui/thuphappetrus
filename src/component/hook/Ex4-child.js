import { memo } from "react";
function Ex4Child({onCount4}) {
    console.log('render');
    return (
        <div>
            <h2>Component use memo </h2>
            <button onClick={onCount4}>Count</button>
        </div>
    )
}

export default memo(Ex4Child)
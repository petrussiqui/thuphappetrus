//------useCallback--------
// 1.  memo() -> Higher Oder Component (HOC)
// - dùng toán tử === để so sánh props (tham chiếu), nếu k có gì thay đổi nó sẽ k run
// - syntax: export default memo(Ex4)
// - use khi state k thay đổi
// 2. useCallback( ()=>{} , [] )
// - Reference types
// - memo() so sánh tham chiếu ===
// - nếu tham chiếu k thay đổi, useCallback k tạo lại function

import { useState, useCallback } from "react";
import Ex4Child from "./Ex4-child";
function Ex4() {
    const [count4, setCount4] = useState(0)
    const handleCount4 = useCallback(() => {
        setCount4(prevCount4 => prevCount4 + 1)
    },[])

    return (
        <div>
            <Ex4Child onCount4={handleCount4} />
            <h2>{count4}</h2>
        </div>
    )
}

export default Ex4
//------useRef --------
// - Khởi tạo giá trị với global. Chỉ run 1 lần
// - Syntax: let refName = useRef()
// - getElement tag: <h1 ref={refName} >...
// - functionComponent k có ref : undefined nếu truyền ref ta dùng forwardRef khi export Comp


import { useRef, useState } from "react";
import Ex3Child from "./Ex3-child";

// Timer ------
function Ex3() {
    const [count, setCount] = useState(60)

    let timerId = useRef()
    const videoRef = useRef()

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        videoRef.current.play()
    }

    const handleStop = () => {
        clearInterval(timerId.current);
        console.log("Stop ", timerId.current);
        videoRef.current.pause()
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <Ex3Child ref={videoRef}/>
        </div>
    )
}

export default Ex3
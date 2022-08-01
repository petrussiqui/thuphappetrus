//------useRef --------
// - Khởi tạo giá trị với global. Chỉ run 1 lần
// - Syntax: let refName = useRef()
// - getElement: <h1 ref={refName} >...


import { useRef, useState } from "react";
// Timer ------
function Ex3() {
    const [count, setCount] = useState(60)

    let timerId = useRef()

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        console.log("Start ", timerId.current);
    }

    const handleStop = () => {
        clearInterval(timerId.current);
        console.log("Stop ", timerId.current);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Ex3
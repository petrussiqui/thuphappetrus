//----useState----


import { useState, useMemo } from "react";
import { Button } from "@mui/material";
import "./hook.scss"
import Ex2 from "./Ex2"
import Ex3 from "./Ex3"
// import Ex4 from "./Ex4";
// import Ex5 from "./Ex5";
// import Ex6 from "./Ex6";
// import Ex7 from "./Ex7";
// import Ex8 from "./Ex8";
// import Section10 from "./Section10";
//useState basic
function Ex1() {
    // // component sẽ run lại sau khi gọi lại handle 
    // const orders = useRef([100, 200, 100]);
    // const [counter, setCounter] = useState(() => {
    //     const total = orders.reduce((total, cur) => total + cur) // reduce tinh total
    //     return total;
    // }) // nhưng k thực thi func trong useState(...)
    const [show, setShow] = useState(true);
    // const handle = () => {
    //     setCounter(counter + 1); //counter k đổi value
    //     //callback() prevState sẽ cập nhật lại value sau khi callback
    //     setCounter(prevState => prevState + 1);
    // }
    const hookEx = useMemo(() => {
        return (
            <>
                {/* <Section10 />
                <Ex6 />
                <Ex5 />
                <Ex7 />
                <Ex3 /> */}
            </>
        )
    }, []);
    return (
        <>
        {/* <Ex8 /> */}
        <div className="newSession">
            {/* <h1> {counter} </h1>
            <button onClick={handle}>Increase</button> */}
            <>{hookEx}</>
            <Button variant="contained" onClick={() => {
                setShow(show => !show)
            }}> Mounted / Unmounted</Button>
            {show || <Ex2 />}
        </div>
        </>
    )
}
export default Ex1
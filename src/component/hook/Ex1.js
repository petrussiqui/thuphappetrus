//----useState----


import { useState } from "react";
import Ex2 from "./Ex2"
import "./hook.scss"
//useState basic
const orders = [100, 200, 100];
function Ex1() {
    // component sẽ run lại sau khi gọi lại handle 
    const [counter, setCounter] = useState(() => { 
        const total = orders.reduce((total, cur) => total + cur) // reduce tinh total
        return total;
    }) // nhưng k thực thi func trong useState(...)
    const [show, setShow]=useState(true);
    const handle = () => {
        setCounter(counter + 1); //counter k đổi value
        //callback() prevState sẽ cập nhật lại value sau khi callback
        setCounter(prevState => prevState + 1);
    }
    return (
        <div className="newSession">
            <h1> {counter} </h1>
            <button onClick={handle}>Increase</button>
            <button onClick={()=> {
                setShow(show=>!show)
                }}> Mounted / Unmounted</button>
            {show || <Ex2/>}
        </div>
    )
}
export default Ex1
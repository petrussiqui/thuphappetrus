import { useEffect, useState } from "react";
// 1. useEffect(callback) // ít dùng
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi element thêm vào DOM
// 2. useEffect(callback, [])
// - Gọi callback 1 lần khi component mounted
// - Gọi API
// 3. useEffect(callback, [deps])
// - Callback sẽ đc gọi lại mỗi khi deps (biến) thay đổi

//---------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn đc gọi trước khi component unmounted
// 3. Cleanup function luôn đc gọi trước khi callback() đc gọi (trừ lần mounted)


const tabs=['posts','todos','users']
function Ex2() {
    // const [title, setTitle] = useState();
    const [todos, setTodos] = useState([])
    const [type,setType]=useState('posts')
    //useEffect sẽ run sau return
    useEffect(() => {
        // document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(todosApi => {
                setTodos(todosApi)
            })

        //Cleanup func tránh rò rỉ bộ nhớ
        return ()=>{
            // fuction thực thiện khi out useEffect()
        }
    }, [type])
    return (
        <div className="">
            <h1> useEffect </h1>
            <input />
            <div>
                {tabs.map(tab=>(
                    <button
                        key={tab}
                        style={ type === tab ? {opacity:"0.8"} : {}}
                        onClick={()=>setType(tab)}
                    >{tab}</button>
                ))}
            </div>
            <div className="ContentAPI"> 
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title || todo.name}</li>
                ))}
            </ul>
            </div>
        </div>
    )
}
export default Ex2
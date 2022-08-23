//------useMemo()--------
// 1.  useMemo( ()=>{} , [] )
// - use khi state k thay đổi

import { useState, useMemo } from "react";
function Ex5() {
    const [name5, setName5] = useState('')
    const [price5, setPrice5] = useState('')
    const [products, setProducts] = useState([])

    const handleImport = () => {
        setProducts([...products, {
            name5,
            price5: Number(price5)
        }])
        setName5('')
        setPrice5('')
    }

    const total5 = useMemo(() => {
        const result = products.reduce((result, prod) => {    
            return result + prod.price5
        },0)
        console.log("Thực hiện tính");
        return result
    }, [products])

    return (
        <div className="newSession">
            <h3>Import products</h3>
            <input type="text"
                value={name5}
                placeholder='Enter product name'
                onChange={e => setName5(e.target.value)}
            />
            <br/>
            <input type="text"
                value={price5}
                placeholder='Enter product price'
                onChange={e => setPrice5(e.target.value)}
            />
            <br/>
            <input type="submit"
                value="Submit"
                onClick={handleImport}
            />
            <h4>Total: {total5}</h4>
            <ul>
                {products.map((product,index)=>(
                    <li key={index}>{product.name5} - {product.price5}</li>
                ))}
            </ul>
        </div>
    )
}

export default Ex5

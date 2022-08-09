
// Context: Comp A => Comp C truyền xuyên không
// Comp A => Comp B => Comp C
// 1. a = createContext()
// 2. Provider // có thể chia ra thành 1 comp
// 3. Consumer // useContext(a) dùng ở comp C

//----Tạo Theme: Dark / Light
import { Button } from "@mui/material";
import { createContext, useState } from "react";
import Ex4 from "./Ex4";

const ThemeContext = createContext();
function Ex7() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={theme}>
             <Button variant="contained"
                onClick={toggleTheme}
            >Dark / Light</Button>
            <Ex4></Ex4>
        </ThemeContext.Provider>
    )

}
export {ThemeContext}// có thể dùng cách này export nhiều thành phần
export default Ex7 // export default bắt buộc
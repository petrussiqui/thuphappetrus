import style from "./postitem.module.css"

function Input({label,...propsBtn}){
    return(
        <div>
            <label>{label}</label>
            <input {...propsBtn}/>
        </div>
    )
}
function ButtonChildren({children}){
    return(
        <button>{children}</button>
    )
}
function FormJSX(){
    const Form ={
        Input(){
            return <input/>
        },
        Checkbox(){
            return <input type="checkbox"/>
        }
    };
    // const classes= clsx(style.btnLink, 'd-flex', {
    //     [style.active]: props //boolean truyền từ component
    // })
    return(
        <div className="form">
            <Input
                label="Input"
                type="text"
                placeholder="Enter your name"
                title="This is input"
            />
            <Form.Input></Form.Input>
            <ButtonChildren>{false || "Don't Click Me!"}</ButtonChildren>
        </div>
    );
}

export default FormJSX;
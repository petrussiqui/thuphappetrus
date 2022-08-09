import style from "./postitem.module.css"
// function PostItem1(){
//     return(
//         <div className="post-item">
//             <img src="https://static-images.vnncdn.net/files/publish/2022/7/4/minions-su-troi-day-cua-gru-6-798.jpeg" alt="minions"></img>
//             <h2> Minion richkid</h2>
//             <p>Minion niềng răng, chạy xe Vision</p>
//         </div>
//     );

// }
function ButtonLink({title, href, onClick, className}){
    let Component="button";
    const btnProps={};
    if(href){
        btnProps.href=href;
        Component="a";
    }
    if (onClick) {
        btnProps.onClick=onClick;
    }
    return(
        <Component {...btnProps} className={className}>{title}</Component>
    )
}

function PostItem(props){
  
    return(
        <div className="post-item">
            <img src={props.src} alt="minions" width="100%" height="300px"></img>
            <h2 className={style.heading}> {props.title}</h2>
            <p>{props.des}</p>
            
            <ButtonLink
                title="Petrus Sĩ Quí"
                href="https://petrussiqui.github.io"
                onClick={()=>{ console.log( Math.random())}}
                // className ={ `${style.btnLink} ${style.active} author` }
                 className ={ [style.btnLink, style.active, 'author'].join(' ') }
            /> 
            <button 
                onClick={()=>{
                    console.log( Math.random());
                }}
                className="readmore"            
            >Read more</button>
        </div>
    );
}

export default PostItem;
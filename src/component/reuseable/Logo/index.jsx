import style from "./index.module.css";
const Logo = ({width,height}) => {
    return (
    <div className={style.circle} style={{width: width,height:height}}>
        <p>Champ|quiz</p>
    </div>
    )
}

export default Logo
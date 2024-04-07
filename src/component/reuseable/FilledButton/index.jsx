import style from "./index.module.css"
import {Link} from "react-router-dom";
const FilledButton = ({text, textColor, color, navigate})=> {

    return(
        <div>
            <Link to={navigate}>
            <button style={{color: textColor, backgroundColor: color}} className={style.filledButton}>
                {text}
            </button>
                </Link>
        </div>
    )
}

export default FilledButton
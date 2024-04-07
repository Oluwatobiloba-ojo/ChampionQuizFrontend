import FilledButton from "../FilledButton";
import style from "./index.module.css"

const Navbar = ()=> {

    return(
        <div className={style.main}>
            <p className={style.logo1}>Champ<span className={style.logo2}>quiz</span></p>
            <div className={style.innerMain}>
                <p>Home</p>
                <p>Features</p>
                <p>About-Us</p>
            </div>
            <div className={style.buttonDiv}>
            <FilledButton text={"Login"} textColor={"blue"} color={"white"} navigate={"/login"}/>
            <FilledButton text={"SignIn"} textColor={"white"} color={"blue"} navigate={"sign_in"}/>
            </div>
        </div>
    )
}

export default Navbar
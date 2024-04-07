import logo from "../../../assets/logo.jpg"
import style from "./index.module.css"
import FilledButton from "../../../component/reuseable/FilledButton";

const Hero = ()=>{

    return(
        <div className={style.main}>
            <div className={style.innerMain2}>
                <img src={logo} alt={"logo"}/>
                <p className={style.logo}>Champ|<span className={style.logo2}>Quiz</span></p>
            </div>
            <div className={style.innerMain}>
                <p className={style.text}>Make big Subject easier to digest in student taking quiz to relate with software development</p>
                <p className={style.text2}>Join this community to see and explore different question given by teachers across the world and also teachers to give out question to their student using champion quiz</p>
                <FilledButton text={"Sign up for free"} textColor={"white"} color={"blue"} navigate={"/sign_in"}/>
            </div>
        </div>
    )

}

export default Hero
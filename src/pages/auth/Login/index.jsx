import Logo from "../../../component/reuseable/Logo";
import style from "./index.module.css"
import {Formik} from "formik";

const Login = () => {
    const url = "localhost:9090/api/v1/quiz_app/user/login"

    const handleSubmit = () => {

    }

    return (
        <div className={style.main}>
            <div className={style.innerMain}>
                <Logo width={"30%"} height={"70px"}/>
            </div>
            <Formik initialValues={
                {
                    email : "",
                    password: ""
                }
            } onSubmit={handleSubmit}>


            </Formik>
        </div>
    )
}

export default Login
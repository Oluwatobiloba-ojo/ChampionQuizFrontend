import Logo from "../../../component/reuseable/Logo";
import style from "./index.module.css"
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'


const Login = () => {
    const navigate = useNavigate();
    const url = "http://localhost:9090/api/v1/quiz_app/user/login"

    const handleRenderingBy = (role)=>{
        console.log(role)
        if (role === "LEARNER"){
            navigate("/learner/home")
        }else{
            navigate("/teacher/home")
        }
    }

    const handleSubmit = async (values,{resetForm}) => {
        try {
            const response = await axios.post(url, values);
            console.log(response)
            if(response.data.successful){
                localStorage.setItem("user", values.email)
               let role = response.data.message.role
                handleRenderingBy(role)
            }else{
                toast.error(`Sign-in went wrong due to ${response.data.message}` , {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }catch (error){
            console.log(error.response.data.message);
            toast.error(`Sign-up went wrong due to ${error.response.data.message}` , {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    resetForm()
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
                {({values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                })=> (
                    <Form>
                        <div>
                            <label>Email</label><br/>
                            <Field
                                name={"email"}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={"text"}
                                placeHolder={"email"}
                                style={{
                                    borderColor: errors.email && touched.email ? "red" : "inherit"
                                }}
                            />
                        </div>
                        <div>
                            <label>Password</label><br/>
                            <Field
                                name={'password'}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeHolder={"Password"}
                                type={"password"}
                                style={{
                                    borderColor: errors.password && touched.password ? "red" : "inherit"
                                }}
                            />
                        </div>
                        <div>
                            <button type={"submit"}>
                                Login
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
            <ToastContainer/>
        </div>
    )
}

export default Login
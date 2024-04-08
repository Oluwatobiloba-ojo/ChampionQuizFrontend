import style from "./index.module.css"
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {Slide, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate} from "react-router-dom";
import Logo from "../../../component/reuseable/Logo";



const SignIn = () => {
    const navigate = useNavigate()


    const handleSubmit = async (values) => {

       try {
           console.log(values)
           const response = await axios.post("http://localhost:9090/api/v1/quiz_app/user", values)
           if(response.data.successful){
               console.log(response.data.message.message)
               toast.success(`${response.data.message.message}`, {
                   position: "top-right",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "dark",
                   transition: Slide,
               });
               localStorage.setItem("user", values.email);
               navigate("/login")
           }else{
               console.log(response)
               toast.error(`Sign-up went wrong due to ${response.data.message}` , {
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
            console.log(error.response.data.message)
           toast.error(`Sign-up went wrong due to` , {
               position: "top-right",
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
           });
       }
    }

    return(
        <div className={style.main}>
            <div className={style.innerMain}>
                <Logo width={"30%"} height={"70px"}/>
            </div>
            <Formik initialValues={{
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                password: "",
                email: "",
                confirmPassword: "",
                role : "",
            }}   onSubmit={handleSubmit}>
                {({values
                      ,errors,
                      touched,
                      handleChange,
                      handleBlur }) => (
                        <Form>
                            <div className={style.mainCont}>
                                <div>
                                    <label>First name:</label><br/>
                                    <Field
                                        type={"text"}
                                        name={"firstName"}
                                        value={values.firstName}
                                        placeholder={"First Name"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            borderColor: errors.firstName && touched.firstName ? "red" : "inherit",
                                        }}
                                    />
                                    {errors.firstName && touched.firstName && (
                                        <div className={style.error}>{errors.firstName}</div>
                                    )}
                                </div>
                                <div>
                                    <label>Last Name:</label><br/>
                                    <Field
                                        name={"lastName"}
                                        value={values.lastName}
                                        type={"text"}
                                        placeholder={"Last Name"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            borderColor: errors.lastName && touched.lastName ? "red" : "inherit"
                                        }}
                                    />
                                    {errors.lastName && touched.lastName && (
                                        <div className={style.error}>{errors.lastName}</div>
                                    )}
                                </div>
                                <div>
                                    <label>Date Of Birth</label><br/>
                                    <Field
                                        name={"dateOfBirth"}
                                        value={values.dateOfBirth}
                                        type={"date"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={
                                            {
                                                borderColor: errors.dateOfBirth && touched.dateOfBirth ? "red" : "inherit"
                                            }
                                        }
                                    />
                                    {errors.dateOfBirth && touched.dateOfBirth && (
                                        <div className={style.error}>{errors.dateOfBirth}</div>
                                    )}
                                </div>
                                <div>
                                    <label>Email</label><br/>
                                    <Field
                                        name={"email"}
                                        value={values.email}
                                        type={"email"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            borderColor: errors.dateOfBirth && touched.dateOfBirth ? "red" : "inherit"
                                        }}
                                    />
                                    {errors.email && touched.email && (
                                        <div className={style.error}>{errors.email}</div>
                                    )}
                                </div>
                                <div>
                                    <label>Password</label><br/>
                                    <Field
                                        name={"password"}
                                        value={values.password}
                                        type={"password"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            borderColor: errors.password && touched.password ? "red" : "inherit"
                                        }}
                                    />
                                    {errors.password && touched.password && (
                                        <div className={style.error}>{errors.password}</div>
                                    )}
                                </div>
                                <div>
                                    <label>Confirm Password: </label><br/>
                                    <Field
                                        name={"confirmPassword"}
                                        value={values.confirmPassword}
                                        type={"password"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            borderColor: errors.confirmPassword && touched.confirmPassword ? "red" : "inherit"
                                        }}
                                    />
                                    {errors.confirmPassword && touched.confirmPassword && (
                                        <div className={style.error}>{errors.confirmPassword}</div>
                                    )}
                                </div>
                                <div>
                                    <label>Role: </label><br/>
                                   <select name={"role"} onChange={handleChange} value={values.role}>
                                       <option value={"Teacher"}>Teacher</option>
                                       <option value={"Learner"}>Learner</option>
                                   </select>
                                </div>
                                <div>
                                    <button type={"submit"}>Submit</button>
                                </div>

                            </div>

                        </Form>
                )}
            </Formik>
            <ToastContainer />

        </div>
    )
}

export default SignIn
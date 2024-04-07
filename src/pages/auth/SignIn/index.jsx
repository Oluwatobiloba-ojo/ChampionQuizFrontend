import style from "./index.module.css"
import {Field, Form, Formik} from "formik";
const SignIn = () => {

    const handleSubmit = (values) => {
        console.log(values)
    }

    return(
        <div className={style.main}>
            <div className={style.innerMain}>
                <div className={style.circle}>
                    <p>Champ|quiz</p>
                </div>
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
        </div>
    )
}

export default SignIn
import {useEffect, useState} from "react";
import axios from "axios";
import style from "./index.module.css"
import FilledButton from "../../component/reuseable/FilledButton";

const Learner = ()=>{
    const email = localStorage.getItem("user")
    const [quiz, setQuiz] = useState([{}])
    const [isTitle, setIsTitle] = useState(false)

    useEffect(() => {
        const fetchTitle = async () => {
            try{
                const response = await axios.get("http://localhost:9090/api/v1/quiz_app/quiz/"+ email)
                console.log(response);
                if (response.data.successful){
                    if (response.data.message != null) {
                        console.log(response.data.message)
                        setQuiz(response.data.message)
                        setIsTitle(true)
                    }
                }else{
                    console.log(response.data)
                }
                console.log(response.data)
            }catch (error){
                console.log(error)
            }
        }
        fetchTitle();
    }, [email]);
    
    
    return (
        <div>
            <div>
                {isTitle ? (
                    <div className={style.innerMain}>
                        {quiz.map((value, index) => {
                            return(
                                <div className={style.quiz}>
                                    <div className={style.title}>
                                        <h2>{value.title}</h2>
                                    </div>
                                    <p>{value.description}</p>
                                    <p>Data Created: {value.date}</p>
                                    <div className={style.button}>
                                    <FilledButton text={"Start Quiz"} color={"blue"} textColor={"white"} navigate={"/quiz/"+value.title}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ): (
                    <div>
                    <div className={style.quiz}>
                        <h4>Quiz is not Available</h4>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );

}

export default Learner
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Slide, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import style from "./index.module.css"

const Quiz = () => {
    let { quizTitle} = useParams();
    const url = "http://localhost:9090/api/v1/quiz/question/"+quizTitle;
    const [isQuestion, setIsQuestion] = useState(false)
    const [questions, setQuestions] = useState([{}])
    useEffect(() => {
        const getQuestion = async () => {
            try{
                const response =  await axios.get(url);
                if(response.data.successful) {
                    setQuestions(response.data.message);
                    if (questions.length > 0){
                        setIsQuestion(true);
                    }
                    console.log(isQuestion)
                }else{
                    toast.success(`${response.data.message}`, {
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
                }
            }catch (error){
                toast.success(`${error.response.data.message}`, {
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
            }
        }
        getQuestion()
    }, []);

    const handleClick = (event, questionIndex) => {
        console.log(event.target.value)
        console.log(questions[questionIndex])
    }


    return (
        <div>
            {isQuestion ? (
            <div className={style.questions}>
                {questions.map((value, index) => {
                    return(
                        <div>
                            <h4>{index+1}.{value.question}</h4>
                             <div className={style.options}>
                                <input type="radio" value={value.optionA} className={style.button} name={"option"+index}  onClick={event => handleClick(event, index)}/>
                                <label>{value.optionA}</label><br/>
                                <input type="radio" className={style.button} value={value.optionB} name={"option"+index} onClick={event => handleClick(event, index)}/>
                                <label>{value.optionB}</label><br/>
                                <input type="radio" className={style.button} value={value.optionC} name={"option"+index} onClick={event => handleClick(event, index)}/>
                                <label>{value.optionC}</label><br/>
                                <input type="radio" value={value.optionD} className={style.button} name={"option"+index} onClick={event => handleClick(event, index)}/>
                                <label>{value.optionD}</label>
                            </div>
                        </div>
                    )
                })}
            </div>
            ) : (
                <div>
                    <h4>No Question Added Yet</h4>
                </div>
            )}
            <ToastContainer/>
        </div>
    )

}

export default Quiz

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Slide, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate} from "react-router-dom"
import style from "./index.module.css"

const Quiz = () => {
    const navigate = useNavigate()
    let { quizTitle} = useParams();
    const url = "http://localhost:9090/api/v1/quiz/question/"+quizTitle;
    const [isQuestion, setIsQuestion] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [answer, setAnswer] = useState(['']);

    useEffect(() => {
        const getQuestion = async () => {
            try{
                const response =  await axios.get(url);
                if(response.data.successful) {
                    setQuestions(response.data.message);
                    if (response.data.message.length > 0){
                        setIsQuestion(true);
                    }
                }else{
                    showToast(response.data.message);
                }
            }catch (error){
                showToast(error.response.data.message);
            }
        }
        getQuestion()
    }, []);

    const showToast = (message) => {
        toast.success(`${message}`, {
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

    const handleSelectedAnswer = (event, questionIndex) => {
      const answers = [...answer]
      answers[questionIndex] = event.target.value;
      setAnswer(answers); 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(answer.length === questions.length && checkIfAnswerAllQuestion()){
                let score = markAnswer();
                navigate("/scoreBoard", {state: {score: score, numberOfQuestion: questions.length}} );
        }else{
            showToast("Did not answer all question");
        }
    }

    const markAnswer = () => {
        let count = 0;
        for(let question in questions){
            console.log(answer[question]);
            if (questions[question].answer === answer[question]){
                count += 1;
            }
        }
        return count;
    }

    const checkIfAnswerAllQuestion = () => {
        for(let count of answer){
            if(count === undefined){
                return false;
            }
        }
        return true;
    }

    return (
        <div>
            {isQuestion ? (
            <form className={style.questions} onSubmit={handleSubmit}>
                <div>
                <h1>{quizTitle}</h1>
                </div>
                {questions.map((value, index) => {
                    return(
                        <div key={index}>
                            <h4>{index+1}.{value.question}</h4>
                             <div className={style.options}>
                                <input type="radio" value={value.optionA} className={style.button} name={"option"+index}  onChange={event => handleSelectedAnswer(event, index)}/>
                                <label>{value.optionA}</label><br/>
                                <input type="radio" className={style.button} value={value.optionB} name={"option"+index} onChange={event => handleSelectedAnswer(event, index)}/>
                                <label>{value.optionB}</label><br/>
                                <input type="radio" className={style.button} value={value.optionC} name={"option"+index} onChange={event => handleSelectedAnswer(event, index)}/>
                                <label>{value.optionC}</label><br/>
                                <input type="radio" value={value.optionD} className={style.button} name={"option"+index} onChange={event => handleSelectedAnswer(event, index)}/>
                                <label>{value.optionD}</label>
                            </div>
                        </div>
                    )
                })}
                <input type="submit" value="Submit"/>
            </form>
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

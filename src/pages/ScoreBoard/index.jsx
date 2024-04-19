import {useLocation} from "react-router-dom"
import style from "./index.module.css"
import FilledButton from "../../component/reuseable/FilledButton";

const ScoreBoard = () => {
    const {state} = useLocation();
    const {score, numberOfQuestion} = state;

    const generateResponse = () => {
        if(score === numberOfQuestion){
            return "You answered all questions correctly "
        }else{
            return `You scored ${score} out of ${numberOfQuestion}` 
        }
    }
    return (
        <div>
            <div className={style.answerResponse} >
                <h3>{generateResponse()}</h3>
                <div>
                    <FilledButton text={"Preview Question"} color={"blue"} textColor={"white"} navigate={"/scoreBoard"}/>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;
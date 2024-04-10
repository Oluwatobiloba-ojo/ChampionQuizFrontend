import {useParams} from "react-router-dom";

const Quiz = () => {
    let { quizTitle} = useParams();
    const url = "localhost:9090/api/"
    return (
        <div>
            <p>Quiz</p>
            <p>{quizTitle}</p>
        </div>
    )

}

export default Quiz

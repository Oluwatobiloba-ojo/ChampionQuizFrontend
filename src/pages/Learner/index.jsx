import {useState} from "react";
import axios from "axios";

const Learner = ()=>{
    const email = localStorage.getItem("user")
    const [title, setTitle] = useState([])

    const fetchTitle = async () => {
        const response = await axios.get("http://localhost:9090/api/v1/quiz_app/quiz/"+ email)
        try{

            console.log(response.data)
        }catch (error){
            console.log(error)
        }

    }

    fetchTitle()


    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );

}

export default Learner
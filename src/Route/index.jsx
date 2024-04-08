import Home from "../pages/Home";
import Layout from "../component/Layout";
import SignIn from "../pages/auth/SignIn";
import Teacher from "../pages/Teacher";
import Learner from "../pages/Learner";
import Login from "../pages/auth/Login";

export const Route = [
    {
        path: "",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/sign_in",
                element: <SignIn/>
            },
            {
                path: "/teacher/home",
                element: <Teacher/>
            },
            {
                path: "/learner/home",
                element: <Learner/>
            },
            {
              path: "/login",
              element: <Login/>
            }
        ]
    }
]

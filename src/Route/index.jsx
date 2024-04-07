import Home from "../pages/Home";
import Layout from "../component/Layout";
import SignIn from "../pages/auth/SignIn";

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
            }
        ]
    }
]

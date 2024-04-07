import Navbar from "../reuseable/Navbar";
import {Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default Layout
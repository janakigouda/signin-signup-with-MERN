import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Apple from './Apple';


const App=()=>{
    return(
        <BrowserRouter>
            <Apple/>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App;
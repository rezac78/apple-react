import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Apple from './Apple';


const App=()=>{
    return(
        <BrowserRouter>
            <Apple/>
        </BrowserRouter>
    )
}

export default App;
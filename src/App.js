
import {useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Carrello from "./Pages/Carrello";
import {useStateValue} from "./utils/Provider";




function App() {

  

  return (
      
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/carrello" element={<Carrello/>} />
            
            
          </Routes>
                

        </div>
     
      );
}

export default App;

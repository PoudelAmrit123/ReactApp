// import logo from './logo.svg';
import "./App.css";
// import Navbar from "./Component/NavBar";
import TextForm from "./Component/TextForm";
import About from "./Component/About"
 import NavBar from "./Component/NavBar"
// import  {useState} from "react";
 
import React , {useState} from 'react'
import Alret from "./Component/Alret";
import {
  BrowserRouter as Router,
  Link,
  Outlet
} from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { Route  , Routes} from "react-router";
// import {Switch} from  "react-router-dom";

  

//

function App() {

    

  const [mode, setMode] = useState('light');
   const [alret, setAlret] = useState(null);

     const showAlret = (msg , type)=> {
     setAlret({
       msg : msg ,
       type : type 

     })

     }


        setTimeout(() => {
          setAlret(null);
          
        }, 1500);
        

    const toggleMode = ()=> {
        if(mode==='dark'){
          setMode('light');
          showAlret(" Light Mode have been Enabled" , "success");
           document.title = "Text Utility - Light Mode";
            // document.body.style.backgroundColor = "light"
             const docs = document.getElementById("body");
               docs.style.backgroundColor = "light"
          
          // window.getComputedStyle(document.body).backgroundColor ='light';

        }   
        else {
          setMode('dark');
          showAlret(" Dark Mode have been Enabled" , "success")
          document.title = "Text Utility - Dark Mode";
          // document.body.style.backgroundColor = "dark";
          const docs = document.getElementById("body");
          docs.style.backgroundColor = "dark"

        
          // window.getComputedStyle(document.body).backgroundColor ='dark';
        } 
   
    }



       
  return (

   
   
 <>

     
        
<Router>
   <  NavBar   title ="TextUtilis" mode={mode}  toggle={toggleMode} aboutText="About"/>
    
   <Alret   alret={alret} />

   
      <div className="container">
      {/* <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={  <TextForm heading=" Enter Your Text Here " showAlret={showAlret} mode={mode}    />} />
    
        
         
          </Routes> */}

      
          <Routes>
        
            <Route exact path="/About" element={<About />}>   </Route>
            <Route   exact path="/"   element={
                <TextForm heading="Enter text" mode={mode} />
              }
            >

            </Route> 
            
        


          </Routes>

      </div>
      </Router>
       

       </>
    
  );
 
}

export default App;

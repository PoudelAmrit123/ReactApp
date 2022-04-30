// import logo from './logo.svg';
import "./App.css";
// import Navbar from "./Component/NavBar";
import TextForm from "./Component/TextForm";
// import About from "./Component/About"
 import NavBar from "./Component/NavBar"
// import  {useState} from "react";
import React , {useState} from 'react'

//

function App() {

    

  const [mode, setMode] = useState('light');
    const toggleMode = ()=> {
        if(mode==='dark'){
          setMode('light');
           
          document.body.style.backgroundColor = 'light';
        }   
        else {
          setMode('dark');
          document.body.style.backgroundColor = 'dark';
        } 
   
    }
  return (

   
   
 <>

      
        
    
   <  NavBar   title ="TextUtilis" mode={mode}  toggle={toggleMode} aboutText="About"/>
    
   

    
      <div className="container">

        <TextForm heading=" Enter Your Text Here " mode={mode}  />
        {/* <About   toggle= {toggleMode} /> */}

      </div>

       </>
    
  );
 
}

export default App;

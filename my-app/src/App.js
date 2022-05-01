// import logo from './logo.svg';
import "./App.css";
// import Navbar from "./Component/NavBar";
import TextForm from "./Component/TextForm";
// import About from "./Component/About"
 import NavBar from "./Component/NavBar"
// import  {useState} from "react";
 
import React , {useState} from 'react'
import Alret from "./Component/Alret";

  

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
          showAlret(" Light Mode have been Enabled" , "success")
           
          
          // window.getComputedStyle(document.body).backgroundColor ='light';

        }   
        else {
          setMode('dark');
          showAlret(" Dark Mode have been Enabled" , "success")
        
          // window.getComputedStyle(document.body).backgroundColor ='dark';
        } 
   
    }



       
  return (

   
   
 <>

      
        
    
   <  NavBar   title ="TextUtilis" mode={mode}  toggle={toggleMode} aboutText="About"/>
    
   <Alret   alret={alret} />

    
      <div className="container">

        <TextForm heading=" Enter Your Text Here " showAlret={showAlret} mode={mode}    />
        {/* <About   toggle= {toggleMode} /> */}

      </div>
        
       

       </>
    
  );
 
}

export default App;

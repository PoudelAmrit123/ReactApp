import React ,{useState} from 'react'

export default function TextForm(props) {



    // const [ text , setText] = useState ( 'Enter Your Text Here ');

     const [text, setText] = useState('Enter Your Text Here ');

      const handleUpclick = ()=> {
          console.log("Upper Case is clicked" , text );
          
  
          let newText = text.toUpperCase();
          setText(newText);
      }

       const handleOnchange = (event)=>{
           console.log("on change");
           console.log(text);
           setText(event.target.text);
       }


      

  return (
      <div>
      
<div className="mb-3">
     <h1> {props.heading }</h1>
     <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="6"></textarea>
     
</div>

   <button className="btn btn-primary"  onClick={handleUpclick}> Convert To Upperclass</button>
        
        
        
        
        
</div>

 

 
)


}

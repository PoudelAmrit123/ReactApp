import React , {useState} from 'react'


  export default function TextForm(props){

    

      const handleUpChange = ()=> {

       let newText = text.toUpperCase();
       setText(newText);
         
      }


      
      const handleLoChange = ()=> {

        let newText = text.toLowerCase();
        setText(newText);
          
       }


       const handleClearChange = ()=> {

        let newText = '';
        setText(newText);
          
       }

    










      const handleOnChange = (event)=> {

    
          setText(event.target.value);

      }
      const [text,setText] = useState('')

      return (
        
         <>
          <div className='container'>
  <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value={text}  onChange= {handleOnChange}  id="myBox" rows="3"></textarea>

</div>
   <button className="btn btn-primary mx-2"  onClick={handleUpChange}> Convert to UpperClass</button>
   <button className="btn btn-primary mx-2"  onClick={handleLoChange}> Convert to LowerClass</button>
   <button className="btn btn-primary"  onClick={handleClearChange}> Clear Text</button>
   
</div>

                  <div className="container my-3">
                  <h1> Your Text Summary </h1>
                    <p>  {text.split(" ").length} WORDS and {text.length} CHARACTER</p>
                    <p>  { 0.008 * text.split(" ").length} Minute to Read</p>
                    <h3> Preview</h3>
                      <p> {text}</p>

                  </div>




</>
      )




  }
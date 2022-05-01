import React , {useState} from 'react';




 
  export default function TextForm(props){

    

      const handleUpChange = ()=> {

       let newText = text.toUpperCase();
       setText(newText);
       props.showAlret(" Converted To LowerCase" , "success")

         
      }


      
      const handleLoChange = ()=> {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlret(" Converted To UpperCase" , "success")
          
       }


     const handleCopyChange = ()=> {
        let text = document.getElementById("myBox");
            text.select();
           navigator.clipboard.writeText(text.value);
           props.showAlret(" Copied To ClipBoard" , "success")


     }




       const handleClearChange = ()=> {

        let newText = '';
        setText(newText);
        props.showAlret(" Text Cleared" , "success")
       }

    










      const handleOnChange = (event)=> {

    
          setText(event.target.value);

      }
      const [text,setText] = useState('')

      return (
        
         <>
          <div className='container '  style= {{color :  props.mode==='light'? 'dark':'light'}}>
  <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value={text} style={ {backgroundColor : props.mode==='light'? 'dark':'light'}} onChange= {handleOnChange}  id="myBox" rows="3"></textarea>

</div>
   <button className="btn btn-primary mx-2"  onClick={handleUpChange}> Convert to UpperClass</button>
   <button className="btn btn-primary mx-2"  onClick={handleLoChange}> Convert to LowerClass</button>
   <button className="btn btn-primary  mx-2"  onClick={handleClearChange}> Clear Text</button>
   <button className="btn btn-primary"  onClick={handleCopyChange}> Copy Text</button>
   
</div>

                  <div className="container my-3" style= {{color :  props.mode==='light'? 'dark':'light'}}>
                  <h1> Your Text Summary </h1>
                    <p>  {text.split(" ").length} WORDS and {text.length} CHARACTER</p>
                    <p>  { 0.008 * text.split(" ").length} Minute to Read</p>
                    <h3> Preview</h3>
                      <p> {text.length>0 ? text : " Enter Your Text Here To Preview"}</p>

                  </div>
                



</>
      )




  }
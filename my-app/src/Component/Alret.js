import React from 'react'

export default function Alret(props) {
   
     const Capatial = (word)=>{
         
        const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase () + lower.slice(1) ; 

     }
    
  return (
   
     props.alret && <div className={`alert alert-${props.alret.type} alert-dismissible fade show`} role="alert">
  <strong> {Capatial(props.alret.type)}</strong> :{props.alret.msg}
 
</div>



  )
}

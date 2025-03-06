import React from "react";

const Inputs = ({type,nameFor,label,onFunction = ()=>{}}) => {
  if(type === "textarea"){
    return(
      <>
      <label  htmlFor={nameFor}><p>{label}</p></label>
      <textarea onChange={onFunction} id={nameFor}></textarea>
      </>
    )
  }else{
    return(
      <>
      <label htmlFor={nameFor}><p>{label}</p></label>
      <input onChange={onFunction} type={type} id={nameFor}/>
      </>
    )
  }

}

export default Inputs
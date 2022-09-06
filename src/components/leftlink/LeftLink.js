import React from 'react'
import "./LeftLink.css"
export const LeftLink = ({img,notifcation,text}) => {
  return (
    <div className='left-link hover1'>
        <img src={`../../../left/${img}.png`} alt={text}/>
        {notifcation!==undefined?(
         <div className='col'>
            <div className='col-1'>{text}</div>
            <div className='col-2'>{notifcation}</div>

         </div>   
        ):(<span>{text}</span>)}
    </div>
  )
}

import React from 'react'
import InputFieldError from "./../Error/InputFieldError"
import "./InputLogin.css"
export const InputLogin = ({placeholder,...props}) => {
    const {type,name,onChange,value,id,errors}=props
  return (
    <div className='input-login'>
        <input type={type} name={name} id={id} placeholder={placeholder}  {...props} onChange={onChange} value={value} autoComplete="off"/>

        <InputFieldError error={errors && errors} />
    </div>
  )
}

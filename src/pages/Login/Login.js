import React,{useState} from 'react'
import { Register } from '../Register.js/Register'
import {LoginForm} from "./LoginForm"
export const Login = () => {
    const [show,setShow]=useState(false);

  return (
    <div>
        <LoginForm setShow={setShow}
        
        
        />
       {show && <Register  setShow={setShow}/>} 

    </div>
  )
}

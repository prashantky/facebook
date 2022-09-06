import React,{useState} from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import  "./Login.css"
import { InputLogin } from "../../components/inputLogin/InputLogin";
import Validation from "../../utility/Validation";
import { useDispatch } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginForm = ({setShow}) => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState ("");
  const [loading, setLoading] = useState(false);

  const [form,setForm]=useState({
    email: {
      value: '',
      validation: {
          required: true,
          email: true
      },
      messages: null,
      valid: false,
      touched: false
  },
    password:{
      value:"",
      validation:{
        required:true
      },
      messages:null,
      valid:false,
      touched:false
    }
  })
  const handleChange=(e)=>{
  let  identifier=e.target.id;
  let element={...form[identifier]}
  element.value=e.target.value;
  element.valid=true
  // console.log("hllo ",element)
  //  const value=e.target.value;
    // setForm({...form,[name]:value})
    const {isValid,messages}=Validation(e.target.value,form[identifier].validation)
    element.messages=messages;
    element.valid=isValid;
    setForm({...form,[identifier]:element})

  }
  const handleSubmit= async(e)=>{
     e.preventDefault()

    const details=form.email.valid && form.password.valid;
    const loginCredentials={      email: form.email.value,
      password: form.password.value,
}
    if(details){
      try {
        setLoading(true);
        const {data}= await axios.post(
          "http://localhost:8000/login",
          loginCredentials
        );
        setLoading(false);
        setSuccess(data.message);
        const {message,...rest}=data;
        dispatch({type:"LOGIN",payload:rest})
        Cookies.set("user",JSON.stringify(rest))
        navigate("/")

        setTimeout(()=>{
        },2000)
      } catch (error) {
        setLoading(false);
        setSuccess("")
        setError(error.response.data.message);
      }
    }
    // if()
    // setContact(prev=>[...prev,form])
  }
  return (
    <div className="login">
      <div className="login-wrapper" >
        <div className="login-wrap">
            <div className="login-1">
          <img src="../../../icons/facebook.svg" alt="facebook-logo" />
          <h1>
            <span>
              Facebook helps you connect and share with the people in your life.
            </span>
          </h1>
        </div>
        <div className="login-2">
          <div className="login_2_wrap">
            <form className="form-field" style={{marginTop:"10px"}}>
            <InputLogin type="email" name='email' id="email" placeholder="Email address or phone number" onChange={handleChange} value={form.email.value} errors={form.email.messages}/>
            <InputLogin type="password" name='password' id="password" placeholder="Password" onChange={handleChange} value={form.password.value} errors={form.password.messages}/>

              <button type="submit" className="blue-btn" onClick={handleSubmit}>Log In</button>

            </form>
            <DotLoader color="#1026" loading={loading} size={30} />
              <div className="header-msg mb-2 ml-0 mr-1 ">
                {success && <span style={{ fontSize: "20px" }}>{success}</span>}
              </div>
              {error && <span style={{ fontSize: "20px" }}>{error}</span>}

            <Link to="/forget" className="forgot-password">Forgot password</Link>
            <div className="space-sidder"></div>
            <button type="submit" className="blue-btn login-2-createbtn" onClick={()=>setShow(true)}>Create Account</button>
          </div>
          <Link to="/">
            <b>Creat a page</b>for celebrity and business
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

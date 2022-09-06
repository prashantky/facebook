import React, { useState } from "react";
import "./Register.css";
import { InputLogin } from "../../components/inputLogin/InputLogin";
import Validation from "../../utility/Validation";
import RadioWithLevel from "../../components/RadioButton/RadioWithLevel";
import axios from "axios";
import { useDispatch } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

export const Register = ({setShow}) => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const [success, setSuccess] = useState("");
  const [dateError, setDateError] = useState("");
  const [error, setError] = useState ("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: {
      value: "",
      validation: {
        required: true
      },
      messages: null,
      valid: false,
      touched: false
    },
    last_name: {
      value: "",
      validation: {
        required: true
      },
      messages: null,
      valid: false,
      touched: false
    },

    email: {
      value: "",
      validation: {
        required: true,
        email: true
      },
      messages: null,
      valid: false,
      touched: false
    },
    password: {
      value: "",
      validation: {
        required: true
      },
      messages: null,
      valid: false,
      touched: false
    },
    gender: {
      value: "",
      validation: {
        required: true
      },
      messages: null,
      valid: false,
      touched: false
    },
    bDay: {
      value: new Date().getDate(),
      validation: {
        required: true
      },
      messages: null,
      valid: false,
      touched: false
    },
    bMonth: {
      value: new Date().getMonth() + 1,
      validation: {
        required: true
      },
      messages: null,
      valid: false,
      touched: false
    },
    bYear: {
      value: new Date().getFullYear(),
      validation: {
        required: true
      },
      messages: null,
      valid: false,
      touched: false
    }
  });
  // const {bYear:bYear.value,bMonth.value,bDay.value}=form
  const year = Array.from(
    new Array(100),
    (val, index) => form.bYear.value - index
  );
  const month = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(form.bYear.value, form.bMonth.value, 0).getDate();
  };
  console.log(">>>>>>>>>>>>>>>>hollo", getDays());
  const day = Array.from(new Array(getDays()), (val, index) => 1 + index);

  const genderArray = [
    { id: 1, value: "Male" },
    { id: 2, value: "Female" },
    { id: 3, value: "Custom" }
  ];
  console.log(
    "hello i checking for date",
    form.bDay.value,
    form.bMonth.value,
    form.bYear.value
  );
  const handleChange = (e) => {
    let identifier = e.target.id;

    let element = { ...form[identifier] };
    element.value = e.target.value;
    element.valid = true;
    // console.log("hllo ",element)
    //  const value=e.target.value;
    // setForm({...form,[name]:value})
    const { isValid, messages } = Validation(
      e.target.value,
      form[identifier].validation
    );
    element.messages = messages;
    element.valid = isValid;
    setForm({ ...form, [identifier]: element });
  };
  const radioHandle = (event) => {
    let element = { ...form["gender"] };
    element.value = event.target.value;
    element.touched = true;
    const { isValid, messages } = Validation(
      event.target.value,
      form["gender"].validation
    );
    element.valid = isValid;
    element.messages = messages;
    setForm({ ...form, gender: element });
    // setFormValidity(handleValidation())
  };
  console.log("hello for checking the date", form.bDay.value);

  const handleSubmit = async (e) => {
    console.log("hello bro", form);

    e.preventDefault();
    let current_date = new Date();
    let picked_date = new Date(
      form.bYear.value,
      form.bMonth.value - 1,
      form.bDay.value
    );
    let atLeastFourty = new Date(1970 + 14, 0, 1);
    let notMoreThanSeventy = new Date(1970 + 70, 0, 1);
    if (current_date - picked_date < atLeastFourty) {
      setDateError("Your are below 14 years");
    } else if (current_date - picked_date > notMoreThanSeventy) {
      setDateError("you are above 70");
    }

    const details =
      form.first_name.valid &&
      form.last_name.valid &&
      form.email.valid &&
      form.password.valid &&
      form.gender.valid &&
      form.bDay.value &&
      form.bMonth.value &&
      form.bYear.value;
    const register = {
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      email: form.email.value,
      password: form.password.value,
      gender: form.gender.value,
      bDay: form.bDay.value,
      bMonth: form.bMonth.value,
      bYear: form.bYear.value
    };
    if (details) {
      try {
        setLoading(true);
        const {data}= await axios.post(
          "http://localhost:8000/register",
          register
        );
        setLoading(false);
        setSuccess(data.message);
        const {message,...rest}=data;
        setTimeout(()=>{
          dispatch({type:"LOGIN",payload:rest})
          Cookies.set("user",JSON.stringify(rest))
          navigate("/")
        },2000)
      } catch (error) {
        setLoading(false);
        setSuccess("")
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="blur">
      <div className="register-wrapper">
        <div className="register-header">
          <div className="hedaar-icon">
            {" "}
            <div>
              {" "}
              <i className="exit_icon" onClick={()=>setShow(false)}></i>
            </div>
          </div>
          <div className="header-text">
            {" "}
            <div>
              {" "}
              <span className="register-sign-up">Sign Up</span>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="header-msg mb-2 ml-0 mr-1 ">
          <span style={{ fontSize: "20px" }}>It's quick and easy</span>
        </div>

        <div className="login-2">
          <div className="login_2_wrap">
            <form className="form-field" style={{ marginTop: "10px" }}>
              <InputLogin
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                onChange={handleChange}
                value={form.first_name.value}
                errors={form.first_name.messages}
              />
              <InputLogin
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last name"
                onChange={handleChange}
                value={form.last_name.value}
                errors={form.last_name.messages}
              />
              <InputLogin
                type="email"
                name="email"
                id="email"
                placeholder="Email address or phone number"
                onChange={handleChange}
                value={form.email.value}
                errors={form.email.messages}
              />

              <InputLogin
                type="password"
                name="password"
                id="password"
                placeholder="New Password"
                onChange={handleChange}
                value={form.password.value}
                errors={form.password.messages}
              />
              <div className="reg-date">
                <div className="reg-date-label">
                  Date of birth?<i className="info_icon"></i>
                </div>
                <select
                  name="bDay"
                  id="bDay"
                  value={form.bDay.value}
                  onChange={handleChange}
                >
                  {day.map((itemDay, i) => (
                    <option key={i} value={itemDay}>
                      {itemDay}
                    </option>
                  ))}
                </select>
                <select
                  name="bMonth"
                  id="bMonth"
                  className="bMonth mt-1"
                  value={form.bMonth.value}
                  onChange={handleChange}
                >
                  {month.map((itemMonth, i) => (
                    <option key={i} value={itemMonth}>
                      {itemMonth}
                    </option>
                  ))}
                </select>
                <select
                  name="bYear"
                  id="bYear"
                  className="bYear"
                  value={form.bYear.value}
                  onChange={handleChange}
                >
                  {year.map((itemyear, i) => (
                    <option key={i} value={itemyear}>
                      {itemyear}
                    </option>
                  ))}
                </select>
                {dateError && <p>{dateError}</p>}
              </div>

              {/* <InputLogin
                type="date"
                name="date"
                id="date"
                placeholder="Select date of birth"
                onChange={handleChange}
                value={form.date.value}
                errors={form.date.messages}
              /> */}

              {/* <div className="radio-btn" style={{ display: "flex" }}> */}
              <RadioWithLevel
                isFocused={true}
                id="gender"
                name="gender"
                radioHandle={radioHandle}
                list={genderArray}
                errors={form.gender.messages}
                value={form.gender.value}
              >
                Gender
              </RadioWithLevel>
              <DotLoader color="#1026" loading={loading} size={30} />
              <div className="header-msg mb-2 ml-0 mr-1 ">
                {success && <span style={{ fontSize: "20px" }}>{success}</span>}
              </div>
              {error && <span style={{ fontSize: "20px" }}>{error}</span>}

              <button type="submit" className="blue-btn" onClick={handleSubmit}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

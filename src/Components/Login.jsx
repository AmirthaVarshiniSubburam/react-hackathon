import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
      
    const [userDetails, setuserDetails] = useState([])
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const navigate = useNavigate
    
    const api = axios.create({
        baseURL: `http://localhost:3000/userDetails`
    })

    useEffect(() => {
      api.get(`/`)
    
      .then(response=>setuserDetails(response.data))
      .catch(error=>console.log(error))

    })
    
    const navigateToSignUp = () => {

      navigate("/signup")
  }

    const loginCheck = (e) => {

      e.preventDefault();

      if(email=== "" || password === "") {
        alert("Kindly fill the details")
      }

      var LoginValidationStatus = ""

      for (let i = 0; i < userDetails.length; i++) {
        if (email === userDetails[i].id && password === userDetails[i].password)
        {
            
            LoginValidationStatus = "ok"

        }
    } 

    if( LoginValidationStatus === "ok" )
    {
                    alert("Welcome to our banking world")
                    navigate( "/dashboard" )
                }
            else    
                {
                    alert("login failed")                    
                }
    }    
  return (
    <div className='container-fluid p-5'>
        <h3>Login</h3>

        <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Email" required onChange={(e) => setEmail (e.target.value)}  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword (e.target.value)}  />
      </FloatingLabel>
      
      <div className="col-md-12 text-center p-5">
            <button type="button" className="btn btn-primary m-3" onClick={loginCheck}>Login</button>
            <button type="button" className="btn btn-warning" onClick={navigateToSignUp}>Sign In</button>
        </div>

     </div>
  )
}

export default Login
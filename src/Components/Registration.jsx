import axios from 'axios';
import React, { useState } from 'react'
import { Container, FloatingLabel, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
    const [firstname, setfirstName] = useState(``)
    const [lastname, setlastName] = useState(``)
     const [userName, setuserName] = useState(``)
     const  [address, setaddress] = useState(``)
     const [phonenumber, setphonenumber] = useState(0)
     const [accountnumber, setAccountNumber] = useState(0)
     const [email, setEmail] = useState(``)
     const [password, setPassword] = useState(``)
     const navigate = useNavigate();

     //Regex for validation

     var regexFirstName = /^[a-zA-Z]{3,}$/
     var regexLastName = /^[a-zA-Z]{1,}$/
    var regexUName = /[A-Za-z0-9]{6,20}/
    var regexPhNo = /^[0-9]\d{09}$/
    var regexAddress = /^[a-zA-Z0-9(?:_*.\-\/\\,\s)?]{10,100}$/
    var regexAccountNo = /^[0-9]\d{04}$/
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regexPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    
    //setting up base url
    const api = axios.create({
        baseURL:`http://localhost:3000/userDetails`
    })

    //to check if all fields are filled in
    // if (!isRequired(newStudent)){
    //     alert (`Fill in all the details`)
    // }

    // to prevent reloading while submit
    
    const navigateToLogin = () => {
      navigate("/Login")
    }
        const SignUp = (e) => {
            e.preventDefault()            
        if ( !regexUName.test(userName) ) {
          alert(`User Name should be atleast 6 characters, use only alpha-numeric values`)
        }               

    else if ( !regexAddress.test(address) )
    {
        alert(`Address field must have characters mon of 10 to max 100`)
    }

    else if ( !regexAccountNo.test(accountnumber) )
    {
        alert(`Enter your 7 digit Enrollment Number`)
    }

    else if ( !regexEmail.test(email) )
    {
        alert(`Enter valid email id`)
    }

    else if ( !regexPhNo.test(phonenumber) )
    {
        alert(`Enter valid phone number`)
    }

    else if ( !regexPassword.test(password) )
    {
        alert(`Create strong password`)
    }

    else
    {
                
    var newUser = {        
        "username" : userName,
        "phoneno" : phonenumber,
        "accountno" : accountnumber,
        "id" : email,
        "password" : password
    }

    api.post(`/`,newUser)
        .then(res=> console.log(res))
        .catch(error => console.log(error))
        alert ("Sign Up Sucessful")
    }         
}
  return (
    <div className='container-fluid mt-5'>
      <Navbar bg="warning" className='ms-25' p-4>
        <Container>
          <Navbar.Brand>Welcome to our Registration page</Navbar.Brand>
        </Container>
      </Navbar>
    <br />
    
    <FloatingLabel
    controlId="floatingInput"
    label="User Name"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="UserName" required onChange={(e) => setuserName (e.target.value)}/>
  </FloatingLabel>
  <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
    <Form.Control type="text" placeholder="Address" required onChange={(e) => setaddress (e.target.value)} />
  </FloatingLabel> 
  <FloatingLabel controlId="floatingInput" label="Phone number" className="mb-3">
    <Form.Control type="number" placeholder="Phone number" required onChange={(e) => setphonenumber (e.target.value)} />
  </FloatingLabel> 
  <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
    <Form.Control type="email" placeholder="Email" required onChange={(e) => setEmail (e.target.value)} />
  </FloatingLabel>
  <FloatingLabel controlId="floatingInput" label= "Account Number" className="mb-3">
    <Form.Control type="number" placeholder="Account Number" required onChange={(e) => setAccountNumber (e.target.value)} />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
    <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword (e.target.value)} />
  </FloatingLabel>

  <div className="col-md-12 text-center p-5">
        <button type="submit" className="btn btn-primary m-3" onClick={SignUp}>Sign Up</button>
        <button type="button" className="btn btn-warning" onClick={navigateToLogin}>Login</button>
    </div>
    
    </div>
  )
}

export default Registration
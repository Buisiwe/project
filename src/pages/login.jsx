import React, {useState} from 'react';
import axios from 'axios';
import Register from './register';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Password from '../pages/password';
import { render } from '@testing-library/react';
    
function Login(props) {
    const [state , setState] = useState({
        hospName : "",
        email : "",
        password : ""
    })
   
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }


 

const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }

    const handleRegisterClick = (e) => {
        e.preventDefault();
        <Register/>
    }



    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "hospName": state.HospName,
                "email":state.email,
                "password":state.password,
            } 
        }
    }

    return(
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <span className="h3">Login</span>
      <label for="email">Hospital name:</label>
    <input type="hospName" 
                       className="form-control" 
                       id="hospName" 
                       placeholder="enter hospital's name" 
                       value={state.hospName}
                       onChange={handleChange}
                />
                <br/>
      <div/>
      <label for="email">Email address:</label>
      <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <br/>
      <div/>
      <label for="email">Password:</label>
      <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="password"
                        value={state.password}
                        onChange={handleChange} 
                    />
      <div/>
      <br/>
      <div>
          <input type="checkbox" 
                     className="form-check-input" 
                     name="" id="" 
                     value="checkedValue" checked 
                    ></input>
                    
                     <span>Remember me!</span>
                     {" "} 
                    <Link to="/password"> Forget Password?</Link>
                     
      </div>
         
      
    
      <br/>
      
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}> Log in</button>
      </div>
      <br/>
      <div>
          <h10>Do you have an account?</h10><Link to="/register">Sign up</Link>
      
      </div>
      
      </div>
    )
}


export default Login;
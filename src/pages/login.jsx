import React, {useState} from 'react';
import axios from 'axios';
import Register from './register';

function Login(props) {
    const [state , setState] = useState({
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
                "email":state.email,
                "password":state.password,
            } 
        }
    }

    return(
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <br/>
      <div/>
      <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
      <div/>
      <br/>
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}> Submit</button>
      </div>
      <br/>
       <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}> Register</button>
      </div>
      </div>
    )
}

export default Login;
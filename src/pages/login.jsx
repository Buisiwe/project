import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import Register from './register';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Password from '../pages/password';
import { render } from '@testing-library/react';

function Login(props) {
    const { register, handleSubmit } = useForm();
    const registerUser = ({ email, password, confirmPassword }) => {
        //  confirm if passowrds entered match
        if (password !== confirmPassword) {
            return alert("The password entered does not match");
        }
    }
    // const [state, setState] = useState({
    //     hospName: "",
    //     email: "",
    //     password: ""
    // })

    // const handleChange = (e) => {
    //     const { id, value } = e.target
    //     setState(prevState => ({
    //         ...prevState,
    //         [id]: value
    //     }))
    // }




    // const handleSubmitClick = (e) => {
    //     e.preventDefault();
    //     if (state.password === state.confirmPassword) {
    //         sendDetailsToServer()
    //     } else {
    //         props.showError('Passwords do not match');
    //     }
    // }

    // const handleRegisterClick = (e) => {
    //     e.preventDefault();
    //     <Register />
    // }



    // const sendDetailsToServer = () => {
    //     if (state.email.length && state.password.length) {
    //         props.showError(null);
    //         const payload = {
    //             "hospName": state.HospName,
    //             "email": state.email,
    //             "password": state.password,
    //         }
    //     }
    // }

    return (
        <>
            <div id="grid-container">
                <div className="color-side column"></div>
                <div className="register-form-container column">

                    <div className="form">
                        <div id="main_title">Log In</div>
                        <form onSubmit={handleSubmit(registerUser)}>
                            <div className="input-container">
                                <input
                                    id="email"
                                    className="input"
                                    type="text"
                                    {...register("email", { required: true })}
                                    placeholder=" "
                                />
                                <div className="cut" />
                                <label htmlFor="email" className="placeholder">
                                    Email Address
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="password"
                                    className="input"
                                    type="password"
                                    {...register("password", { required: true })}
                                    placeholder=" "
                                />
                                <div className="cut" />
                                <label htmlFor="Password" className="placeholder">
                                    Password
                                </label>
                            </div>
                            <div className="forgot-pwd">
                                <input type="checkbox"
                                    className="form-check-input"
                                    name=""
                                    id=""
                                    value="checkedValue" checked
                                />
                                <span>Remember me!</span>
                                {" "}
                                <Link to="/password"> Forget Password?</Link>

                            </div>
                            <button type="submit" className="form-submit">
                                Log In
                            </button>
                        </form>
                        <p className="to_login"> Don't have an account?
                            <a className=" to_login login-link" href="/login">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login;
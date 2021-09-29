import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppContext } from "../components/stateprovider";
import { useContext } from "react";
import swal from 'sweetalert';
import useMatchMedia from "../custom hooks/matchmedia";
import "../styles/register.css";
import Header from '../components/header';
import SideColor from '../components/sidecolor';
import { Link } from 'react-router-dom';


function Login() {
    const context = useContext(AppContext)
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const loginHandler = ({ email, password }) => {

        if (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[A-Za-z]/.test(email) !== true) {

            return alert("please enter a valid email address")
        }

        let userdata = {
            Email: email,
            Password: password,
        };

        fetch(
            'http://envisio-001-site1.itempurl.com/api/v1/Auth/login',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userdata),
            }
        )
            .then(res => res.json())
            .then(result => {
                console.log(result)
                // console.log(result.message)
                if (result.status === 400) {
                    return swal({
                        title: "Invalid Credentials",
                        text: " ",
                        icon: "error",
                        button: "Close",
                    });
                }
                

                context.dispatch({
                    type: 'LOGIN',
                    payload: result,
                });
                swal({
                    title: 'Login Successful',
                    text: " ",
                    icon: "success",
                    button: "Close",
                });
                console.log(context)
                history.push("/dashboard");
                
            })
            .catch(err => {
                alert(
                    'Unable to complete request. Please try again after some time'
                );
                console.log({ err });
            });
        
    };
    const isDesktopResolution = useMatchMedia('(min-width:768px)', true)
    return (
        <>
            {isDesktopResolution && (
                <SideColor />
            )}
            <Header />
            <div id="grid-container">
                <div className="color-side column"></div>
                <div className="register-form-container column">

                    <div className="form">
                        <div className="login_title main_title">Log In</div>
                        <form onSubmit={handleSubmit(loginHandler)}>
                            <div className="input-container">
                                <input
                                    id="email"
                                    className="input"
                                    type="email"
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
                            <span >
                                <div className="forgot-pwd">
                                    <input type="checkbox"
                                        className="form-check-input"
                                        name=""
                                        id=""
                                        value="checkedValue"
                                    />

                                    <span>Remember me!</span>
                                    
                                    <span id="forgot-pwd"><Link className="login-link" to="/reset_password"> Forget Password?</Link></span>
                                </div>

                            </span>
                            <button type="submit" className="form-submit">
                                Log In
                            </button>
                        </form>
                        <p className="to_login"> Don't have an account?
                            <a className=" to_login login-link" href="/register">
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
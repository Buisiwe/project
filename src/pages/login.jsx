import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppContext } from "../components/stateprovider";
import { useContext } from "react";
import "../styles/register.css";
import Header from '../components/header';
import SideColor from '../components/sidecolor';
import { Link } from 'react-router-dom';


function Login(props) {
    const context = useContext(AppContext)
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const loginHandler = ({ email, password }) => {

        let userdata = {
            email: email,
            password: password,
        };

        fetch(
            'https://user-manager-three.vercel.app/api/user/login',
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
                if (result.error) {
                    return alert(result.message);
                }
                alert("Login successful");

                context.dispatch({
                    type: 'LOGIN',
                    payload: result.body,
                });

                history.push("/dashboard");
            })
            .catch(err => {
                alert(
                    'Unable to complete request. Please try again after some time'
                );
                console.log({ err });
            });

    };

    return (
        <>
            <SideColor />
            <Header />
            <div id="grid-container">
                <div className="color-side column"></div>
                <div className="register-form-container column">

                    <div className="form">
                        <div className="main_title">Log In</div>
                        <form onSubmit={handleSubmit(loginHandler)}>
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
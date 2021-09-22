import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../components/stateprovider";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import "../styles/register.css";
import Header from "../components/header";
import SideColor from "../components/sidecolor";
import useMatchMedia from "../custom hooks/matchmedia";


const Register = () => {
    const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
    const history = useHistory();

    const registerUser = ({ firstname, lastname, hospname, email, password, confirmpassword }) => {

        //confirms that email format is valid
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]/.test(email) !== true){
            
            return alert("please enter a valid email address")
        }
        
        //  confirm if passowords entered match
        if (password !== confirmpassword) {
            return alert("The password entered does not match");
        }
    
    let newuser = {
        FirstName: firstname,
        LastName: lastname,
        HospitalName: hospname,
        Email: email,
        Password: password,
        ConfirmPassword: confirmpassword
    };

        fetch(`http://envisio-001-site1.itempurl.com/api/v1/Auth/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(newuser),
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
            if (result.error === true) {
                return swal({
                    title: result.message,
                    text: " ",
                    icon: "error",
                    button:null,
                });
            }

            context.dispatch({
                type: "LOGIN",
                payload: result.body,
            });
            
            swal({
                title: 'Registration Successful',
                text: " ",
                icon: "success",
                button: "Close" ,
            });
            history.push("/dashboard");
        })
    
        .catch((err) => {
            console.log("this error occurred", err);
            return swal({
                title: "this error occurred",
                text: err,
                icon: "error",
                button: null,
            });
        });

    }
    const isDesktopResolution = useMatchMedia('(min-width:768px)', true)
    return (
        <>
            <Header />
            {isDesktopResolution && (
                <SideColor />
            )}
            
            <div id="grid-container">
                <div className="register-form-container column">
                    <div className="form">
                        <div className="main_title">Create Account</div>
                        <form onSubmit={handleSubmit(registerUser)}>
                            <div className="input-container">
                                <input
                                    id="firstname"
                                    className="input"
                                    type="text"
                                    {...register("firstname", { required: true })}
                                    placeholder=" "
                                />

                                {/* <div className="cut" /> */}
                                <label htmlFor="firstname" className="placeholder">
                                    First Name
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="lastname"
                                    className="input"
                                    type="text"
                                    {...register("lastname", { required: true })}
                                    placeholder=" "
                                />

                                <div className="cut" />
                                <label htmlFor="lastname" className="placeholder">
                                    Last Name
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="hospname"
                                    className="input"
                                    type="text"
                                    {...register("hospname", { required: true })}
                                    placeholder=" "
                                />
                                <div className="cut" />
                                <label htmlFor="hospname" className="placeholder">
                                    Hospital Name
                                </label>
                            </div>
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
                            <div className="input-container">
                                <input
                                    id="confirmpassword"
                                    className="input"
                                    type="password"
                                    {...register("confirmpassword", { required: true })}
                                    placeholder=" "
                                />
                                <div className="cut" />
                                <label htmlFor="confirmpassword" className="placeholder">
                                    Confirm Password
                                </label>
                            </div>
                            <button type="submit" className="form-submit">
                                Sign Up
                            </button>
                        </form>
                        <p className="to_login"> Already have an account?
                            <a className=" to_login login-link" href="/login">
                                Log in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
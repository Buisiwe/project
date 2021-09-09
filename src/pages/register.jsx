import { useForm } from "react-hook-form";
import "../styles/register.css";
import Header from "../components/header";
import SideColor from "../components/sidecolor";


const Register = () => {
    const { register, handleSubmit } = useForm();

    const registerUser = ({ email, password, confirmPassword }) => {
        //  confirm if passowrds entered match
        if (password !== confirmPassword) {
            return alert("The password entered does not match");
        }
    }

    return (
        <>
            <SideColor />
            <Header />
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
                                    id="specialization"
                                    className="input"
                                    type="text"
                                    {...register("specialization", { required: true })}
                                    placeholder=" "
                                />
                                <div className="cut" />
                                <label htmlFor="specialization" className="placeholder">
                                    Specialization
                                </label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="hosp-name"
                                    className="input"
                                    type="text"
                                    {...register("hosp-name", { required: true })}
                                    placeholder=" "
                                />
                                <div className="cut" />
                                <label htmlFor="hosp-name" className="placeholder">
                                    Hospital Name
                                </label>
                            </div>
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
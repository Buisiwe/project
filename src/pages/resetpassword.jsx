import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import '../styles/register.css';
import Header from '../components/header';
import SideColor from '../components/sidecolor';
import useMatchMedia from "../custom hooks/matchmedia";


function ResetPassword() {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const registerUser = ({ email, password, confirmPassword }) => {
        //  confirm if passowrds entered match
        if (password !== confirmPassword) {
            return alert("The password entered does not match");
        }

        history.push("/password_change")
    }
    

    const isDesktopResolution = useMatchMedia('(min-width:768px)', true)
    return (
        <>
            {isDesktopResolution && (
                <SideColor />
            )}
            <Header />
            <div id="grid-container">
                <div className="register-form-container column">
                    <div className="form">
                        <h2 className="main_title ">Reset Password</h2>
                        <p className="center">oops... Forgot password?</p>
                        <p className="center">Input your registered email to initiate reset</p>
                        <br/>
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
                            <button type="submit" className="form-submit">
                                Confirm
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResetPassword;

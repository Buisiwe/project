import { useForm } from "react-hook-form";
import '../styles/register.css';
import Header from '../components/header';
import SideColor from '../components/sidecolor';
import useMatchMedia from "../custom hooks/matchmedia";


function PasswordChange() {
    const { register, handleSubmit } = useForm();
    const registerUser = ({ email, password, confirmPassword }) => {
        //  confirm if passowrds entered match
        if (password !== confirmPassword) {
            return alert("The password entered does not match");
        }
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
                        <p className="center">You're almost there</p>
                        <br />
                        <form onSubmit={handleSubmit(registerUser)}>
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
                                <label htmlFor="Password" className="placeholder">
                                    Confirm Password
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
export default PasswordChange;
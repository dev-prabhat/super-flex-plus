import React,{useState} from "react"
import { BiShow,BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Header } from "../../components";
import {useAuth, useTheme} from "../../context"
import { useDocumentTitle } from "../../customHooks";
import "../commonPage.css"
import "./signup.css"

export const SignUp = () => {
    useDocumentTitle("SignUp")
    const [showPassword, setShowPassword] = useState(false)
    const {signupUser,signupHandler,setSignUpUser} = useAuth()
    const {theme} = useTheme()
    return(
        <>
          <main className={`signup-page  ${theme === "light" ? "dark-theme" : "light-theme"}`}>
              <Header/>
                <section className="form-wrapper">
                    <form className="signUp-form padding-sm border-radius-xs" onSubmit={signupHandler}>
                        <h1 className="head-md text-center margin-sm welcome-note">Welcome to <span className="highlight">SuperTV+</span></h1>
                        <label className="input-label" htmlFor="firstName">First Name:</label>
                            <input
                            id="firstName"
                            type="text"
                            className="form-field border-radius-xs padding-xs"
                            placeholder="jon"
                            onChange={(e) =>setSignUpUser((prev) => ({...prev,firstName:e.target.value}))}
                            value={signupUser.firstName}
                            required
                            />


                        <label className="input-label" htmlFor="lastName">Last Name: </label>
                            <input
                            type="text"
                            id="lastName"
                            className="form-field border-radius-xs padding-xs"
                            placeholder="doe"
                            onChange={(e) =>setSignUpUser((prev) => ({...prev,lastName:e.target.value}))}
                            value={signupUser.lastName}
                            required
                            />
                        
                        <label htmlFor="emailId" className="input-label">Email Address:</label>
                            <input
                            id="emailId"
                            type="email"
                            className="form-field border-radius-xs padding-xs"
                            placeholder="name@gmail.com"
                            onChange={(e)=>setSignUpUser((prev) => ({...prev,email:e.target.value}))}
                            value={signupUser.email}
                            required
                            />

                        <div className="position-rel">
                            <label htmlFor="password" className="input-label">Password: </label>
                                <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className="form-field border-radius-xs padding-xs"
                                placeholder="password"
                                onChange={(e)=>setSignUpUser((prev) => ({...prev,password:e.target.value}))}
                                value={signupUser.password}
                                required
                                />
                                {
                                showPassword ? (
                                    <BiShow className="show-hide-icon" onClick={() => setShowPassword(prev => !prev)}/>
                                ) : (
                                    <BiHide className="show-hide-icon" onClick={() => setShowPassword(prev => !prev)}/>
                                )   
                                }
                        </div>
                        <div className="other-option-container margin-xs ">
                            <div>
                                <input id="remember-me" type="checkbox" required/>
                                <label htmlFor="remember-me" className="padding-xs remember-me">Remember Me</label>
                            </div>
                        </div>
                        <button className="btn btn-primary text-sm d-100 border-radius-xs">SignUp</button>
                        <p className="text-center text-sm margin-sm font-weight-bold text-gray">
                            Already have an Account
                            <Link to="/login" className="highlight padding-xs">Join</Link>
                        </p>
                    </form>
                </section>
          </main>
        </>
    )
}
import React,{useState} from "react"
import { BiShow,BiHide } from "react-icons/bi";
import {useAuth} from "../../context"

import "./login.css"

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {loginData,handleLogin,setLoginData} = useAuth()
    return(
        <>
          <form className="login-form padding-sm border-radius-xs" onSubmit={handleLogin}>
              <h1 className="head-md text-center margin-sm">Welcome to <span className="highlight">SuperTV+</span></h1>
            <label htmlFor="emailId" className="form-label">Email Address:</label>
                <input
                id="emailId"
                type="email"
                className="form-field border-radius-xs padding-xs"
                placeholder="name@gmail.com"
                onChange={(e)=>setLoginData((prev) => ({...prev,email:e.target.value}))}
                value={loginData.email}
                required
                />
            <div className="position-rel">
                <label htmlFor="password" className="form-label">Password: </label>
                    <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="form-field border-radius-xs padding-xs"
                    placeholder="password"
                    onChange={(e)=>setLoginData((prev) => ({...prev,password:e.target.value}))}
                    value={loginData.password}
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
                    <label htmlFor="remember-me" className="padding-xs">Remember Me</label>
                </div>
                <p 
                   className="test-credential padding-xs"
                   onClick={()=>setLoginData({email:"adarshbalika@gmail.com",password:"adarshBalika123"})}
                    >
                    Use Test Credentials
                </p>
            </div>
            <button className="btn btn-primary text-sm d-100 border-radius-xs">Login</button>
            <div className="text-center text-sm margin-sm font-weight-bold">Don't have an account?</div>
          </form>
        </>
    )
}
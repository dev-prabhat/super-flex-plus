import React,{createContext,useContext,useState,useEffect} from "react"
import toast from "react-hot-toast"
import { useAxios } from "../customHooks"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const {response,isLoading,operation} = useAxios()
    const [loginData, setLoginData] = useState({email:"",password:""})
    const [signupUser, setSignUpUser] = useState({firstName:"",lastName:"",email:"",password:""})
    const [user, setUser] = useState(null)
    const [encodedToken ,setEncodedToken] = useState(null)

    useEffect(()=>{
       let localToken = localStorage.getItem("myToken")
       if(localToken !== null) {
           setEncodedToken(localToken)
       }
    },[])

    const handleLogin = (e) => {
        e.preventDefault()
        operation({
            method:"post",
            url:"/api/auth/login",
            data:{email:loginData.email,password:loginData.password}
        })
        setLoginData({email:"",password:""})
    }

    const signupHandler = (e) => {
        const {firstName,lastName,email,password} = signupUser
        e.preventDefault()
        operation({
            method:"post",
            url:"/api/auth/signup",
            data:{firstName,lastName,email,password}
        }) 
        toast.success('SignUp successfully.',{duration:1000})
        setSignUpUser({firstName:"",lastName:"",email:"",password:""})
    }

    const handleLogout = () => {
        localStorage.clear()
        setEncodedToken(null)
        setUser(null)
        toast.success('Logged out .',{duration:1000})
    }
    
    useEffect(()=>{
        if(response !== undefined){
            console.log(response)
            localStorage.setItem("myToken",response.encodedToken)
            if(response.foundUser){
                localStorage.setItem("user",JSON.stringify(response.foundUser))
                setUser(response.foundUser)
            }
            if(response.createdUser){
                localStorage.setItem("user",JSON.stringify(response.createdUser))
                setUser(response.createdUser) 
            }
            setEncodedToken(response.encodedToken)
        }
    },[response])
   
    return (
        <AuthContext.Provider value={{
            encodedToken,
            isLoading,
            handleLogin,
            setLoginData,
            loginData,
            handleLogout,
            user,
            setSignUpUser,
            signupUser,
            signupHandler
            }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider,useAuth}
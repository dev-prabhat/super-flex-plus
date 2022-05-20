import React,{createContext,useContext,useState,useEffect} from "react"
import toast from "react-hot-toast"
import { useAxios } from "../customHooks"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const {response,isLoading,operation} = useAxios()
    const [loginData, setLoginData] = useState({email:"",password:""})
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
        toast.success('Loggedin successfully.',{duration:1000})
        setLoginData({email:"",password:""})
    }

    const handleLogout = () => {
        localStorage.removeItem("myToken")
        setEncodedToken(null)
        toast.success('Logged out .',{duration:1000})
    }
    
    useEffect(()=>{
        if(response !== undefined){
            localStorage.setItem("myToken",response.encodedToken)
            setEncodedToken(response.encodedToken)
            setLoginData({email:"",password:""})
        }
    },[response])

    return (
        <AuthContext.Provider value={{encodedToken,isLoading,handleLogin,setLoginData,loginData,handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider,useAuth}
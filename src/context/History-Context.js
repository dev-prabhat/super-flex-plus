import React,{createContext,useState,useEffect,useContext} from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./Auth-Context"
import {useAxios} from "../customHooks"

const HistoryContext = createContext()

const HistoryProvider = ({children}) => {
    const navigate = useNavigate()
    const {response,operation} = useAxios()
    const {encodedToken} = useAuth()
    const [historyVideos, setHistoryVideos] = useState([])

    const addToHistory = (video) => {
        if(encodedToken === null) navigate("/login",{replace:true})
        operation({
            method:"post",
            url:"/api/user/history",
            headers:{"authorization":encodedToken},
            data:{video}
        })
    }

    const removeFromHistory = (videoId) => {
        operation({
            method:"delete",
            url:`/api/user/history/${videoId}`,
            headers:{"authorization":encodedToken}
        })
    }

    useEffect(()=>{
      if(response !== undefined){
          setHistoryVideos(response.history)
      }
    },[response])

    return(
        <HistoryContext.Provider value={{addToHistory,removeFromHistory,historyVideos}}>
            {children}
        </HistoryContext.Provider>
    )
}

const useHistory = () => useContext(HistoryContext)

export {HistoryProvider,useHistory}
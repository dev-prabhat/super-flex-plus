import React,{createContext,useState,useContext,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { useAxios } from "../customHooks"
import { useAuth } from "./Auth-Context"

const LikeWatchLaterContext = createContext()

const LikeWatchLaterProvider = ({children}) => {
   const navigate = useNavigate()
   const {encodedToken} = useAuth() 
   const {response:likeResponse,isLoading:likeApiCallLoading,operation:likeOperation} = useAxios()
   const {response:watchLaterResponse,isLoading:watchLaterApiCallLoading,operation:watchLaterOperation} = useAxios()
   const [likedList, setLikedList] = useState([])
   const [watchLaterList, setWatchLaterList] = useState([])

   const handleLike = (video) => {
       if(encodedToken === null) navigate( "/login", {replace:true})
       likeOperation({
           method:"post",
           url:"/api/user/likes",
           headers:{"authorization": encodedToken},
           data:{video}
       })
       if(encodedToken !== null) toast.success("add to liked video",{duration:1000})
   }

   const handleDislike = (videoId) => {
       likeOperation({
           method:"delete",
           url:`/api/user/likes/${videoId}`,
           headers:{"authorization": encodedToken}
       })
       toast.success("remove from liked video",{duration:1000})
   }

   const addToWatchLater = (video) => {
    if(encodedToken === null) navigate( "/login", {replace:true})
       watchLaterOperation({
           method:"post",
           url:"/api/user/watchlater",
           headers:{"authorization": encodedToken},
           data:{video}
       })
       if(encodedToken !== null) toast.success("add to watch later video",{duration:1000})
   }

   const removeFromWatchLater = (videoId) => {
       watchLaterOperation({
           method:"delete",
           url:`/api/user/watchlater/${videoId}`,
           headers:{"authorization": encodedToken}
       })
       toast.success("remove from liked video",{duration:1000})
   }
  
   useEffect(()=>{
       if(likeResponse !== undefined){
        setLikedList(likeResponse.likes)
       }
   },[likeResponse])

   useEffect(()=>{
      if(watchLaterResponse !== undefined){
        setWatchLaterList(watchLaterResponse.watchlater)
      }
   },[watchLaterResponse])

   return(
       <LikeWatchLaterContext.Provider 
        value={{
           handleLike,
           handleDislike,
           likedList,
           likeApiCallLoading,
           watchLaterApiCallLoading,
           addToWatchLater,
           removeFromWatchLater,
           watchLaterList}}>
        {children}
       </LikeWatchLaterContext.Provider>
   )    
}

const useLikeWatchLater = () => useContext(LikeWatchLaterContext)

export {LikeWatchLaterProvider,useLikeWatchLater}
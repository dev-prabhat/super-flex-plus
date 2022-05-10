import React,{createContext,useState,useContext,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { useAxios } from "../customHooks/useAxios"
import { useAuth } from "./Auth-Context"

const LikeWatchLaterContext = createContext()

const LikeWatchLaterProvider = ({children}) => {
   const navigate = useNavigate()
   const {encodedToken} = useAuth() 
   const {response:likeResponse,operation:likeOperation} = useAxios()
   const {response:watchLaterResponse,operation:watchLaterOperation} = useAxios()
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
   }

   const handleDislike = (videoId) => {
       likeOperation({
           method:"delete",
           url:`/api/user/likes/${videoId}`,
           headers:{"authorization": encodedToken}
       })
   }

   const addToWatchLater = (video) => {
    if(encodedToken === null) navigate( "/login", {replace:true})
       watchLaterOperation({
           method:"post",
           url:"/api/user/watchlater",
           headers:{"authorization": encodedToken},
           data:{video}
       })
   }

   const removeFromWatchLater = (videoId) => {
       watchLaterOperation({
           method:"delete",
           url:`/api/user/watchlater/${videoId}`,
           headers:{"authorization": encodedToken}
       })
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
           addToWatchLater,
           removeFromWatchLater,
           watchLaterList}}>
        {children}
       </LikeWatchLaterContext.Provider>
   )    
}

const useLikeWatchLater = () => useContext(LikeWatchLaterContext)

export {LikeWatchLaterProvider,useLikeWatchLater}
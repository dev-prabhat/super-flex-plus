import React,{useContext,createContext,useState,useEffect} from "react"
import {useAxios} from "../customHooks/useAxios"

const VideoContext = createContext()

const VideoProvider = ({children}) => {
    const {response:videoResponse,operation:fetchVideo} = useAxios()
    const {response:categoriesResponse,operation:fetchCategories} = useAxios()
    const [videos, setVideos] = useState([])
    const [categories,setCategories] = useState([])

   useEffect(()=>{
       fetchVideo({method:"get",url:"/api/videos"})
   },[])

   useEffect(()=>{
      if(videoResponse !== undefined){
         setVideos(videoResponse.videos)
      }
   },[videoResponse])

   useEffect(()=>{
    fetchCategories({method:"get",url:"/api/categories"})
   },[])

   useEffect(()=>{
    if(categoriesResponse !== undefined){
        setCategories(categoriesResponse.categories.map(category => category.categoryName))
    }
   },[categoriesResponse])

   return(
       <VideoContext.Provider value={{videos,categories}}>
           {children}
       </VideoContext.Provider>
   )
}

const useVideo = () => useContext(VideoContext)

export {VideoProvider,useVideo}
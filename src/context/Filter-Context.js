import React,{createContext, useContext , useState} from "react"
import {useVideo} from "./Video-Context"

const FilterContext = createContext()

const FilterProvider = ({children}) => {
    const {videos} = useVideo()
    const [category, setCategory] = useState("")
    const [searchVideo,setSearchVideo] = useState("")

    const filteredState = () => {
        let filterVideo = [...videos]

        if(category){
            if(category === "All") return filterVideo
            return filterVideo = filterVideo.filter(video => video.category === category)
        }

        filterVideo = filterVideo.filter(video => video.title.toLowerCase().includes(searchVideo.toLowerCase()))
        return filterVideo
    }

    return(
        <FilterContext.Provider value={{filteredState,searchVideo,setSearchVideo,setCategory}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext)


export {FilterProvider,useFilter}
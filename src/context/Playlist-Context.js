import React,{createContext,useContext,useState,useEffect} from "react"
import { useAuth } from "./Auth-Context"
import  {useAxios} from "../customHooks/useAxios.js"

const PlaylistContext = createContext()

const PlaylistProvider = ({children}) => {
    const {encodedToken} = useAuth()
    const {response:playlistResponse,operation:playlistOperation} = useAxios()
    const {response:playlistVideosResponse, operation:playlistVideosOperation} = useAxios()

    const [playlistVideo, setPlaylistVideo] = useState({})
    const [createdPlaylists, setCreatedPlaylists] = useState([])
    const [playlist, setPlaylist] = useState({title:"",description:""})


    const createPlaylist = (e) => {
        e.preventDefault()
       playlistOperation({
           method:"post",
           url:"/api/user/playlists",
           headers:{"authorization": encodedToken},
           data:{playlist:{title:playlist.title,description:playlist.description}}
       })
    }

    const deletePlaylist = (playlistId) => {
        playlistOperation({
            method:"delete",
            url:`/api/user/playlists/${playlistId}`,
            headers:{"authorization": encodedToken},
        })
    }

    const addToPlaylist = (playlistId) => {
        playlistVideosOperation({
            method:"post",
            url:`/api/user/playlists/${playlistId}`,
            headers:{"authorization": encodedToken},
            data:{video:playlistVideo}
        })
    }

    const deleteFromPlaylist = (playlistId,videoId) => {
        playlistVideosOperation({
            method:"delete",
            url:`/api/user/playlists/${playlistId}/${videoId}`,
            headers:{"authorization": encodedToken},
        })
    }

    
    useEffect(()=>{
       if(playlistResponse !== undefined){
           setCreatedPlaylists(playlistResponse.playlists)
           setPlaylist({title:"",description:""})
       }
    },[playlistResponse])
    

    useEffect(()=>{
       if(playlistVideosResponse !== undefined){
        setCreatedPlaylists(playlists => playlists.map(playlist => {
            if(playlist._id === playlistVideosResponse.playlist._id) {
                playlist.videos = [...playlistVideosResponse.playlist.videos]  
            }  
               return playlist
        }))
        console.log(createdPlaylists)
       }
    },[playlistVideosResponse])
    
     
    return(
        <PlaylistContext.Provider value={{
            createPlaylist,
            setPlaylist,
            playlist,
            createdPlaylists,
            playlistVideo,
            deletePlaylist,
            addToPlaylist,
            setPlaylistVideo,
            deleteFromPlaylist
            }}>
            {children}
        </PlaylistContext.Provider>
    )
}

const usePlaylist = () => useContext(PlaylistContext)

export {PlaylistProvider,usePlaylist}
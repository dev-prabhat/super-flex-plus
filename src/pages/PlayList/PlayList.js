import { Link } from "react-router-dom"
import { Header, NavBar, VideoCard } from "../../components"
import { usePlaylist, useTheme } from "../../context"
import { useDocumentTitle } from "../../customHooks"

import "../commonPage.css"
import "./playlist.css"

export const PlayList = () => {
    useDocumentTitle("Playlist")
    const {createdPlaylists,deletePlaylist} = usePlaylist()
    const {theme} = useTheme()
    
    return(
        <>
         <main className={`page-main ${theme === "light" ? "dark-theme" : "light-theme"}`}>
             <Header/>
             <NavBar/>
             <section className="page-content padding-xs">
                 {
                     createdPlaylists.length === 0 &&
                    <div className=" padding-sm ">
                        <h1 className="head-lg text-center text-gray">No video is here  
                        <Link to="/explore" className="navigate-link"> Click here </Link> 
                        to check some videos</h1> 
                    </div>
                 }
               <div className="playlist-container">
                   {
                       createdPlaylists && createdPlaylists.map(playlist => (
                        <div key={playlist._id} className="single-playlist-container border-radius-xs margin-xs">
                          <div className="playlist-info">
                              <h1 className="head-md text-center">{playlist.title}</h1>
                              <button 
                                    className="btn btn-primary border-radius-xs delete-playlist d-block" 
                                    onClick={()=>deletePlaylist(playlist._id)}>
                                        Delete Playlist
                               </button>
                          </div>
                          <div className="single-playlist">
                           {
                               playlist.videos && playlist.videos.map(video => (
                                   <VideoCard key={video._id} video={video} isPlaylist={true} playlistId={playlist._id}/>
                               ))
                           }
                           </div>
                        </div>
                       ))
                   }
               </div>
             </section>
         </main>
        </>
    )
}
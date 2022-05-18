import { Header, NavBar, VideoCard } from "../../components"
import { usePlaylist } from "../../context"

import "../commonPage.css"
import "./playlist.css"

export const PlayList = () => {
    const {createdPlaylists,deletePlaylist} = usePlaylist()
    
    return(
        <>
         <main className="page-main">
             <Header/>
             <NavBar/>
             <section className="page-content padding-xs">
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
import React from "react"
import { usePlaylist } from "../context"

export const PlaylistForm = () => {
    const {createPlaylist,setPlaylist,playlist,createdPlaylists,addToPlaylist,deleteFromPlaylist,selectedVideo} = usePlaylist()
    
    return(
        <> 
          <form onSubmit={createPlaylist}>
            <div>
                {
                createdPlaylists &&
                    <ul className="styled-list list-style-none padding-xs">
                    {  
                    createdPlaylists.map(playlist => (
                    <li key={playlist._id} className="margin-xs">
                        <input 
                            type="checkbox" 
                            className="margin-xs"
                            id={playlist._id}
                            checked={playlist.videos.some((i) => i._id === selectedVideo._id)}
                            onChange={(e)=> !e.target.checked ? 
                                deleteFromPlaylist(playlist._id,selectedVideo._id) : 
                                addToPlaylist(playlist._id,selectedVideo)} 
                            />
                            <label htmlFor={playlist._id} className="text-sm input-label">
                                {playlist.title}
                        </label>
                    </li>
                    ))}
                </ul>
                }
            </div>

            <div>
                <label className="input-label">Title:</label>
                <input
                type="text"
                className="form-field border-radius-xs padding-xs"
                placeholder="title"
                required
                onChange={(e)=>setPlaylist(prev => ({...prev,title:e.target.value}))}
                value={playlist.title}
                />
            </div>

            <div>
                <label className="input-label">Description: </label>
                <input
                type="text"
                className="form-field border-radius-xs padding-xs"
                placeholder="description"
                required
                onChange={(e)=>setPlaylist(prev => ({...prev,description:e.target.value}))}
                value={playlist.description}
                />
            </div>
             <button className="btn btn-primary d-100">Create Playlist</button>
          </form>
        </>
    )
}
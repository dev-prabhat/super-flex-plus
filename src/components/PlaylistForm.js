import React from "react"
import { usePlaylist } from "../context"

export const PlaylistForm = () => {
    const {createPlaylist,setPlaylist,playlist,createdPlaylists,addToPlaylist} = usePlaylist()
    
    return(
        <> 
          <form onSubmit={createPlaylist}>
            <div>
                {
                    createdPlaylists &&
                <ul className="styled-list list-style-none d-inline_block">
                {
                        createdPlaylists.map(playlist => (
                            <li key={playlist._id} className="margin-xs">
                                <input type="checkbox" id={playlist._id}/>
                                <label 
                                       onClick={()=>addToPlaylist(playlist._id)} 
                                       className="padding-sm text-sm" htmlFor={playlist._id}>
                                       {playlist.title}
                                </label>
                            </li>
                        ))
                }
                </ul>
                }
            </div>

            <div>
                <label className="form-label">Title:</label>
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
                <label className="form-label">Description: </label>
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
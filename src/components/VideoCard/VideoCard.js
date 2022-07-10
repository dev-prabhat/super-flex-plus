import React from "react"
import { Link , useNavigate } from "react-router-dom";
import { useModal , useLikeWatchLater , useHistory,usePlaylist,useAuth} from "../../context";
import { MdPlaylistAdd} from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

import "./videoCard.css"


export const VideoCard = ({
  video, 
  isExplore = false , 
  isLike = false , 
  isWatchLater = false , 
  isHistory = false , 
  playlistId = "",
  isPlaylist = false }) => {
    let navigate = useNavigate()
    const {thumbnail,title,_id,avatar} = video
    const {removeFromWatchLater,handleDislike} = useLikeWatchLater()
    const {removeFromHistory,addToHistory} = useHistory()
    const {setSelectedVideo,deleteFromPlaylist} = usePlaylist()
    const {encodedToken} = useAuth()
    const {setIsModal} = useModal()
    
    const clickHandler = (video) => {
      if(!encodedToken) navigate("../login",{replace:true})
      else {
        setIsModal(prev => !prev)
        setSelectedVideo(video)
      }
    }

    return(
        <>
          <div className="video-card margin-xs padding-xs">
                <Link to={`/video/${_id}`} state={video} onClick={()=>addToHistory(video)}>
                  <div className="img-container">
                    <img className="img-responsive" src={thumbnail} alt="video_thumbnail"/>
                  </div>
                </Link>
              <div className="video-info-container">
                      <div className="avatar avatar-xs">
                        <img
                          className="img-responsive img-round"
                          src={avatar}
                          alt="avatar"
                        />
                      </div>
                      <h4 className="video-title text-center">{title}</h4>
                    {
                      isPlaylist && 
                      <button className="remove-btn" onClick={()=>deleteFromPlaylist(playlistId,video._id)}>
                         <FiTrash2 className="trash-icon"/>
                      </button>
                    }
                    {
                      isExplore &&
                      <button  onClick={()=>clickHandler(video)} className="playlist-btn">
                        <MdPlaylistAdd className="playlist-icon"/>
                      </button>
                    }
                    {
                      isWatchLater &&
                      <button className="remove-btn" onClick={()=>removeFromWatchLater(video._id)}>
                        <FiTrash2 className="trash-icon"/>
                      </button>
                    }
                    {
                      isLike &&
                      <button className="remove-btn" onClick={()=>handleDislike(video._id)}>
                        <FiTrash2 className="trash-icon" />
                      </button>
                    }
                    {
                      isHistory &&
                      <button className="remove-btn"  onClick={()=>removeFromHistory(video._id)} >
                        <FiTrash2 className="trash-icon"/>
                      </button>
                    }
              </div>
          </div>
        </>
    )
}

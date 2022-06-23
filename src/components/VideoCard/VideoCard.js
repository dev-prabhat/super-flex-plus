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
            {
              isExplore ? 
                <Link to={`${_id}`} state={video} onClick={()=>addToHistory(video)}>
                  <div className="img img-container">
                    <img className="img-responsive" src={thumbnail} alt="video_thumbnail"/>
                  </div>
                </Link> :
                  <div className="img img-container">
                    <img className="img-responsive" src={thumbnail} alt="video_thumbnail"/>
                  </div>
            }
              <div className="video-info-container">
                      <div class="avatar avatar-xs">
                        <img
                          class="img-responsive img-round"
                          src={avatar}
                          alt="avatar"
                        />
                      </div>
                      <h4 className="video-title text-center">{title}</h4>
                  {
                    isExplore && <MdPlaylistAdd  onClick={()=>clickHandler(video)} className="playlist-icon"/>
                  }
                  {
                    isWatchLater && <FiTrash2 onClick={()=>removeFromWatchLater(video._id)} className="trash-icon"/>
                  }
                  {
                    isLike &&  <FiTrash2  onClick={()=>handleDislike(video._id)} className="trash-icon" />  
                  }
                  {
                    isHistory && <FiTrash2 onClick={()=>removeFromHistory(video._id)} className="trash-icon"/>
                  }
                  {
                    isPlaylist && <FiTrash2 onClick={()=>deleteFromPlaylist(playlistId,video._id)} className="trash-icon"/>
                  }
              </div>
          </div>
        </>
    )
}

import React from "react"
import { Link } from "react-router-dom";
import { useModal , useLikeWatchLater , useHistory} from "../../context";
import { MdWatchLater, MdPlaylistAdd} from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

import "./videoCard.css"


export const VideoCard = ({video, isExplore = false , isLike = false , isWatchLater = false , isHistory = false} ) => {
    const {thumbnail,title,_id} = video
    const {removeFromWatchLater,handleDislike} = useLikeWatchLater()
    const {removeFromHistory,addToHistory} = useHistory()
    const {setIsModal} = useModal()
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
                  <h4 className="video-title text-sm">{title}</h4>
                  {
                    isExplore && <MdPlaylistAdd  onClick={()=>setIsModal(prev => !prev)} className="playlist-icon"/>
                  }
                  {
                    isWatchLater && <MdWatchLater onClick={()=>removeFromWatchLater(video._id)} className="watchlater-icon"/>
                  }
                  {
                    isLike &&  <AiFillHeart  onClick={()=>handleDislike(video._id)} className="like-icon" />  
                  }
                  {
                    isHistory && <FiTrash2 onClick={()=>removeFromHistory(video._id)} className="trash-icon"/>
                  }
              </div>
          </div>
        </>
    )
}

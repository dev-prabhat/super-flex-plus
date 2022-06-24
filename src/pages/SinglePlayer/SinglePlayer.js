import React from "react"
import ReactPlayer from 'react-player/youtube'
import { useParams , useLocation} from "react-router-dom"
import { useLikeWatchLater} from "../../context";
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import { MdWatchLater,MdOutlineWatchLater } from "react-icons/md";
import { Header, NavBar } from "../../components"
import { useDocumentTitle } from "../../customHooks";
import "../commonPage.css"
import "./singlePlayer.css"


export const SinglePlayer = () => {
    useDocumentTitle("SingleVideo")
    const {videoId} = useParams()
    const {
        handleLike,
        handleDislike,
        likedList,
        watchLaterList,
        addToWatchLater,
        removeFromWatchLater} = useLikeWatchLater()
    const isVideoLiked = likedList.findIndex(video => video._id === videoId) === -1 ? false : true
    const isVideoSaved = watchLaterList.findIndex(video => video._id === videoId) === -1 ? false : true
    const {state} = useLocation()
    const video = state
    return(
        <>
           <main className="page-main">
              <Header/>
              <NavBar/>
              <section className="page-content">
                <div className="single-player-container">
                    <div className="single-player border-radius-xs padding-xs">
                        <ReactPlayer 
                                url={`https://www.youtube.com/watch?v=${videoId}`} 
                                playing={true} 
                                volume={0.5} 
                                controls={true}
                                width="100%"
                                height="80%"
                            />
                        <div className="option-container">
                            <div className="creator-avatar-container">
                                <div className="avatar creator-avatar-icon">
                                    <img
                                    className="img-responsive img-round"
                                    src={video.avatar}
                                    alt="avatar"
                                    />
                                </div>
                                <h2 className="creator-name">{video.creator}</h2>
                            </div>
                            <div className="title-container">
                                <p className="single-page-video-title">{video.title}</p>
                                <div className="action-btn-container">
                                    {
                                        isVideoLiked ? 
                                        <button className="like-btn" onClick={()=>handleDislike(videoId)}>
                                            <AiFillHeart className="like-icon" />
                                        </button> :
                                        <button className="dislike-btn" onClick={()=>handleLike(video)}>
                                            <AiOutlineHeart className="like-icon"/>
                                        </button>
                                    }
                                    {
                                        isVideoSaved ?
                                        <button className="save-btn" onClick={()=>removeFromWatchLater(videoId)}>
                                            <MdWatchLater className="watchlater-icon"/>
                                        </button> :
                                        <button className="remove-btn" onClick={()=>addToWatchLater(video)}>
                                            <MdOutlineWatchLater className="watchlater-icon"/>
                                        </button>
                                    }
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
              </section>
           </main>
        </>
    )
}
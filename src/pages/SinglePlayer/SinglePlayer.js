import React from "react"
import ReactPlayer from 'react-player/youtube'
import { useParams , useLocation} from "react-router-dom"
import { useLikeWatchLater } from "../../context";
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import { MdWatchLater,MdOutlineWatchLater , MdPlaylistAdd} from "react-icons/md";
import { Header, NavBar } from "../../components"
import "../commonPage.css"
import "./singlePlayer.css"

export const SinglePlayer = () => {
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
                            <div className="avatar avatar-sm">
                                <img
                                className="img-responsive img-round"
                                src={video.avatar}
                                alt="avatar"
                                />
                            </div>
                            <h2 className="creator-name head-md">{video.creator}</h2>
                        </div>
                        <div className="title-container">
                            <p className="head-lg">{video.title}</p>
                            <div className="action-btn-container">
                                <div className="d-flex">
                                    {
                                        isVideoLiked ? 
                                        <AiFillHeart  onClick={()=>handleDislike(videoId)} className="like-icon" /> :
                                        <AiOutlineHeart  onClick={()=>handleLike(video)} className="like-icon"/>
                                    }
                                    <p className="text-smd">Like</p>
                                </div>
                                <div className="d-flex">
                                    {
                                        isVideoSaved ?  
                                        <MdWatchLater onClick={()=>removeFromWatchLater(videoId)} className="watchlater-icon"/> :
                                        <MdOutlineWatchLater onClick={()=>addToWatchLater(video)} className="watchlater-icon"/> 
                                    }
                                    <p className="text-sm">Watch Later</p>
                                </div>
                                <div className="d-flex">
                                    <MdPlaylistAdd className="playlist-icon"/> 
                                    <p className="text-sm">Create Playlist</p>
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
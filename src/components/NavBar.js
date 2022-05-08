import { NavLink } from "react-router-dom"

import { AiOutlineHome, AiFillHeart,AiOutlineHistory } from "react-icons/ai";
import { MdOutlinePlaylistPlay,MdOutlineExplore } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";

const activeStyle = ({isActive}) => { return isActive ? "btn-link d-flex head-sm margin-xs active-style" : "btn-link d-flex head-sm margin-xs" }
export const NavBar = () => {
    return(
        <>
         <aside className="side-navbar">
            <NavLink to="/" className={activeStyle}> 
               <AiOutlineHome className="head-md icon-margin"/> Home
            </NavLink>
            <NavLink to="/explore" className={activeStyle}>
                <MdOutlineExplore className="head-md icon-margin"/> Explore
            </NavLink>
            <NavLink to="/playlist" className={activeStyle}>
                <MdOutlinePlaylistPlay className="head-md icon-margin"/> Playlist
            </NavLink>
            <NavLink to="/like" className={activeStyle}>
                <AiFillHeart className="head-md icon-margin"/>Liked
            </NavLink>
            <NavLink to="/watchlater" className={activeStyle}>
                <BsFillBookmarkFill className="head-md icon-margin"/>Watch Later
            </NavLink>
         </aside>
        </>
    )
}
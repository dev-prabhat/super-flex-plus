import { NavLink } from "react-router-dom"

import { AiOutlineHome, AiFillHeart,AiOutlineHistory } from "react-icons/ai";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";

export const NavBar = () => {
    return(
        <>
         <aside className="side-navbar">
            <NavLink to="/" className="btn-link d-flex head-sm margin-xs"> 
               <AiOutlineHome className="head-md icon-margin"/> Home
            </NavLink>
            <NavLink to="/playlist" className="btn-link d-flex head-sm margin-xs">
                <MdOutlinePlaylistPlay className="head-md icon-margin"/> Playlist
            </NavLink>
            <NavLink to="/like" className="btn-link d-flex head-sm margin-xs">
                <AiFillHeart className="head-md icon-margin"/>Liked
            </NavLink>
            <NavLink to="/watchlater" className="btn-link d-flex head-sm margin-xs">
                <BsFillBookmarkFill className="head-md icon-margin"/>Watch Later
            </NavLink>
            <NavLink to="/history" className="btn-link d-flex head-sm margin-xs">
                <AiOutlineHistory className="head-md icon-margin"/>History
            </NavLink>
         </aside>
        </>
    )
}
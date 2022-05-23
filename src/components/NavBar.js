import { NavLink } from "react-router-dom"

import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { MdOutlinePlaylistPlay,MdOutlineExplore,MdOutlineWatchLater ,MdHistory } from "react-icons/md";


const activeStyle = ({isActive}) => { return isActive ? "btn-link d-flex head-sm margin-xs active-style" : "btn-link d-flex head-sm margin-xs" }
export const NavBar = () => {
    return(
        <>
         <nav className="side-navbar">
            <NavLink to="/" className={activeStyle}> 
               <AiOutlineHome className="nav-icons"/> <span className="nav-option"> Home </span> 
            </NavLink>
            <NavLink to="/explore" className={activeStyle}>
                <MdOutlineExplore className="nav-icons"/> <span className="nav-option"> Explore </span>
            </NavLink>
            <NavLink to="/playlist" className={activeStyle}>
                <MdOutlinePlaylistPlay className="nav-icons"/> <span className="nav-option"> Playlist </span>
            </NavLink>
            <NavLink to="/like" className={activeStyle}>
                <AiOutlineHeart className="nav-icons"/> <span className="nav-option"> Liked </span>
            </NavLink>
            <NavLink to="/watchlater" className={activeStyle}>
                <MdOutlineWatchLater className="nav-icons"/> <span className="nav-option"> Watch Later </span>
            </NavLink>
            <NavLink to="/history" className={activeStyle}>
                <MdHistory className="nav-icons"/> <span className="nav-option"> History </span>
            </NavLink>
         </nav>
        </>
    )
}
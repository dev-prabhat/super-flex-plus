import { useState } from "react";
import { MdLogout , MdDarkMode , MdLightMode} from "react-icons/md";
import { Link , useLocation} from "react-router-dom"
import { useAuth , useTheme , useVideo} from "../context"

export const Header = () => {
    const {videos} = useVideo()
    const location = useLocation()
    const [searchVideo, setSearchVideo] = useState("")
    const {encodedToken,handleLogout} = useAuth()
    const {theme , setTheme} = useTheme()
    let searchedVideos = [...videos].filter(video => video.title.toLowerCase().includes(searchVideo.toLowerCase()))
    return(
        <>
         <header className={`website-header ${theme === "light" ? "dark-theme" : "light-theme"}`}>
            <div className="header-title-container">
            <Link to="/" className="header-title">
                <h1 className={`font-weight-bold header-title ${theme === "light" ? "dark-theme" : "light-theme"}`}>
                    Super<span className="header-title-logo">TV+</span>
                </h1> 
            </Link>
            </div>
            <div className="search-wrapper">
                {
                    location.pathname !== "/login" && location.pathname !== "/signup" &&
                    <input 
                        className="search-input padding-xs" 
                        placeholder="Search your video" 
                        onChange={(e)=>setSearchVideo(e.target.value)}
                        value={searchVideo}
                    />
                }
                <div 
                    className={`searched-videos ${theme === "light" ? "dark-theme" : "light-theme"}`}  
                    style={{ display : searchVideo === "" ? "none" : "block"}}>
                    {
                        searchedVideos.length === 0 ?
                        <p className={`${theme === "light" ? "dark-theme" : "light-theme"} text-center padding-sm head-md`}>
                            Video not found
                        </p>
                        :
                        <>
                          {
                            searchedVideos.map(video => (
                                    <Link 
                                        className={`searched-video d-block ${theme === "light" ? "dark-theme" : "light-theme"}`} 
                                        to={`/video/${video._id}`} state={video} key={video._id}
                                        >
                                        {video.title}
                                    </Link>
                                ))
                            }
                        </>
                    }
                </div>
            </div>
            {
                encodedToken ? (
                    <div className="d-flex"> 
                        {
                            theme === "light" ? 
                            <MdLightMode className="mode-icon" onClick={()=>setTheme("dark")}/>:
                            <MdDarkMode className="mode-icon" onClick={()=>setTheme("light")}/> 
                        }
                    <Link to="/profile">
                        <div className="avatar avatar-xs">
                            <img
                            className="img-responsive img-round"
                            src={process.env.PUBLIC_URL + "/svg/avatarIcon.svg"}
                            alt="avatar"
                            />
                        </div>
                    </Link>
                    <MdLogout className="logout-icon" onClick={handleLogout}/>
                    </div>
                ) : (
                <div className="d-flex">
                    {
                        theme === "light" ? 
                        <MdLightMode className="mode-icon" onClick={()=>setTheme("dark")}/>:
                        <MdDarkMode className="mode-icon" onClick={()=>setTheme("light")}/> 
                    }
                    <Link to="/login">
                        <div className="avatar avatar-xs">
                            <img
                            className="img-responsive img-round"
                            src={process.env.PUBLIC_URL + "/svg/avatarIcon.svg"}
                            alt="avatar"
                            />
                        </div>
                    </Link>
                </div>
                ) 
            }
        </header>
        </>
    )
} 
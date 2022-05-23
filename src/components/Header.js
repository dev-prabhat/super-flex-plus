import { MdLogout , MdDarkMode , MdLightMode} from "react-icons/md";
import { Link } from "react-router-dom"
import { useAuth , useFilter , useTheme} from "../context"

export const Header = () => {
    const {setSearchVideo,searchVideo} = useFilter()
    const {encodedToken,handleLogout} = useAuth()
    const {theme , setTheme} = useTheme()
    
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
             <input 
                className="padding-xs search-input" 
                placeholder="Search your video"
                onChange={(e)=>setSearchVideo(e.target.value)}
                value={searchVideo}
                />
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
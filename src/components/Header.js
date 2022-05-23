import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom"
import { useAuth , useFilter} from "../context"

export const Header = () => {
    const {setSearchVideo,searchVideo} = useFilter()
    const {encodedToken,handleLogout} = useAuth()
    
    return(
        <>
         <header className="website-header">
             <div className="header-title-container">
              <Link to="/" className="header-title">
                <h1 className="font-weight-bold header-title">Super<span className="header-title-logo">TV+</span></h1> 
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
                <Link to="/login">
                    <div className="avatar avatar-xs">
                        <img
                        className="img-responsive img-round"
                        src={process.env.PUBLIC_URL + "/svg/avatarIcon.svg"}
                        alt="avatar"
                        />
                    </div>
                </Link>
                ) 
             }
         </header>
        </>
    )
} 
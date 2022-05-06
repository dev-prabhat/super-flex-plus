import { Link } from "react-router-dom"
import { useAuth } from "../context"

export const Header = () => {
    const {encodedToken,handleLogout} = useAuth()

    return(
        <>
         <header className="website-header">
             <div className="header-title-container">
              <h1 className="head-lg font-weight-bold header-title">Super<span className="header-title-logo">TV+</span></h1>
              <p className="text-sm font-weight-semibold header-description">Video Space for SuperHero Nerds</p>
             </div>
             <input className="padding-xs search-input" placeholder="Search your video"/>
             {
                encodedToken ? (
                    <button onClick={handleLogout} className="btn btn-primary head-sm">Logout</button>
                ) : (
                    <Link to="/login" className="btn btn-primary btn-link head-sm">Login</Link>
                ) 
             }
         </header>
        </>
    )
} 
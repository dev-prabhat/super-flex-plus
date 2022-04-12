export const Header = () => {
    return(
        <>
         <header className="website-header">
             <div className="header-title-container">
              <h1 className="head-xl font-weight-bold header-title">Super<span className="header-title-logo">TV+</span></h1>
              <p className="text-sm font-weight-semibold header-description">Video Space for SuperHero Nerds</p>
             </div>
             <input className="padding-xs search-input" placeholder="Search your video"/>
             <button className="btn btn-primary head-sm">Login</button>
         </header>
        </>
    )
} 
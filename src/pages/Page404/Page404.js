import React from "react"
import { Link } from "react-router-dom";
import { useTheme } from  "../../context"
import { Header, NavBar } from "../../components";
import { useDocumentTitle } from "../../customHooks";
import "../commonPage.css"


export const Page404 = () => {
    useDocumentTitle("404")
    const {theme} = useTheme()
    return(
        <>
          <main className={`page-main ${theme === "light" ? "dark-theme" : "light-theme"}`}>
              <Header/>
              <NavBar/>
                <section className="page-content">
                    <figure className="img__wrapper">
                        <img 
                            className="img-responsive" 
                            src={process.env.PUBLIC_URL + "/image/page404.jpg"} 
                            alt="page404"
                            />
                        <figcaption 
                                 className="head-lg text-center text-gray">  
                                 Hi , I think you landed on wrong page 
                                <Link to="/explore" className="navigate-link"> Click here </Link> 
                                to check some videos
                        </figcaption>
                    </figure>
                </section>
          </main>
        </>
    )
}
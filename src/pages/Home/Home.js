import {Link} from "react-router-dom"
import { useVideo } from "../../context"
import { Header, NavBar , Category} from "../../components"
import { useDocumentTitle } from "../../customHooks"
import "../commonPage.css"
import "./home.css"


export const Home = () => {
    useDocumentTitle("Home")
    const {categories} = useVideo()
    
    return(
        <main className="page-main">
          <Header/>
          <NavBar/>
          <section className="page-content padding-xs">
              <div className="hero-section">
                  <p className="hero-description text-xl">
                    If your are a Super-Hero fan than you have reach your destination.
                  </p>
                  <Link className="explore-btn margin-sm d-block" to="/explore"> Explore</Link>
                  <p className="hero-subtitle text-md">
                    You can explore all the videos which are only related to Super-Hero stuff.
                  </p>
              </div>
              <div className="category-section">
                  <h2 className="text-md text-center">Categories</h2>
                    <div className="category-container">
                      {
                        categories.map(category => (
                              <Category key={category} category={category}/>
                        ))
                      } 
                    </div>
              </div>
          </section>
        </main>
    )
}
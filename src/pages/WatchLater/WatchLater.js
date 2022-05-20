import { Link } from "react-router-dom"
import { Header, NavBar , VideoCard} from "../../components"
import {useLikeWatchLater} from "../../context" 
import { useDocumentTitle } from "../../customHooks"
import "../commonPage.css"

export const WatchLater = () => {
    useDocumentTitle("Watchlater")
    const {watchLaterList} = useLikeWatchLater()
    return(
        <>
          <main className="page-main">
              <Header/>
              <NavBar/>
              <section className="page-content padding-xs">
                {
                  watchLaterList.length === 0 && 
                  <div className=" padding-sm ">
                    <h1 className="head-lg text-center text-gray">No video is here  
                    <Link to="/explore" className="navigate-link"> Click here </Link> 
                    to check some videos</h1> 
                  </div>
                }
                <div className="like-video-container">
                    {
                      watchLaterList.map(watchLaterVideo => (
                        <VideoCard key={watchLaterVideo._id} video={watchLaterVideo} isWatchLater={true}/>
                      ))
                    }
                </div>
              </section>
          </main>
        </>
    )
}
import { Link } from "react-router-dom"
import { Header, NavBar, VideoCard } from "../../components"
import { useLikeWatchLater } from "../../context"
import { useDocumentTitle } from "../../customHooks"
import "../commonPage.css"

export const LikePage = () => {
    useDocumentTitle("LikePage")
    const {likedList} = useLikeWatchLater()
    
    return(
        <>
          <main className="page-main">
              <Header/>
              <NavBar/>
              <section className="page-content padding-xs">
                {
                  likedList.length === 0 &&
                  <div className=" padding-sm ">
                    <h1 className="head-lg text-center text-gray">No video is here  
                    <Link to="/explore" className="navigate-link"> Click here </Link> 
                    to check some videos</h1> 
                  </div>
                }
                <div className="like-video-container">
                    {
                      likedList.map(likedVideo => (
                        <VideoCard key={likedVideo._id} video={likedVideo} isLike={true}/>
                      ))
                    }
                </div>
              </section>
          </main>
        </>
    )
}
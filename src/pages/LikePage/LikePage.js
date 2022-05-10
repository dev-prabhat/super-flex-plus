import { Header, NavBar, VideoCard } from "../../components"
import { useLikeWatchLater } from "../../context"
import "../commonPage.css"
import "./likePage.css"

export const LikePage = () => {
    const {likedList} = useLikeWatchLater()
    return(
        <>
          <main className="page-main">
              <Header/>
              <NavBar/>
              <section className="page-content padding-xs">
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
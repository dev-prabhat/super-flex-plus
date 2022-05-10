import { Header, NavBar , VideoCard} from "../../components"
import {useLikeWatchLater} from "../../context" 
import "../commonPage.css"

export const WatchLater = () => {
    const {watchLaterList} = useLikeWatchLater()
    return(
        <>
          <main className="page-main">
              <Header/>
              <NavBar/>
              <section className="page-content padding-xs">
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
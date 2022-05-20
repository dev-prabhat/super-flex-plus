import React from "react"
import { Header, NavBar, VideoCard } from "../../components"
import { useHistory } from "../../context"
import { useDoc } from "../../customHooks"
import "../commonPage.css"

export const History = () => {
    useDoc("History")
    const {historyVideos} = useHistory()
    return(
        <> 
          <main className="page-main">
            <Header/>
            <NavBar/>
            <section className="page-content padding-xs">
               <div className="like-video-container">
                  {
                      historyVideos.map(historyVideo => (
                          <VideoCard key={historyVideo._id} video={historyVideo} isHistory={true}/>
                      ))
                  }
               </div>
            </section>
          </main>
        </>
    )
}
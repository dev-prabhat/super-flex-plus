import React from "react"
import { Link } from "react-router-dom"
import { Header, NavBar, VideoCard } from "../../components"
import { useHistory } from "../../context"
import { useDocumentTitle } from "../../customHooks"
import "../commonPage.css"

export const History = () => {
    useDocumentTitle("History")
    const {historyVideos} = useHistory()
    
    return(
        <> 
          <main className="page-main">
            <Header/>
            <NavBar/>
            <section className="page-content padding-xs">
              {
                historyVideos.length === 0 && 
                  <div className=" padding-sm no-history-video-message">
                    <h1 className="head-lg text-center text-gray">No video is here  
                    <Link to="/explore" className="navigate-link"> Click here </Link> 
                    to check some videos</h1> 
                  </div>
              }
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
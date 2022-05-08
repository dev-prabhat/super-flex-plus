import React from "react"
import { useVideo } from "../../context"
import { Header, NavBar, VideoCard } from "../../components"
import "../commonPage.css"
import "./explore.css"

export const Explore = () => {
    const {videos} = useVideo()
    return(
        <> 
          <main className="page-main">
              <Header/>
              <NavBar/>
                <section className="page-content">
                    <div className="videos-container">
                        {
                            videos.map(video => (
                                <VideoCard key={video._id} video={video}/>
                            ))
                        }
                    </div>
                </section>
          </main>
        </>
    )
}
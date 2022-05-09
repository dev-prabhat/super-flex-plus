import React from "react"
import { useVideo } from "../../context"
import { Header, Modal, NavBar, VideoCard } from "../../components"
import "../commonPage.css"
import "./explore.css"

export const Explore = () => {
    const {videos} = useVideo()
    return(
        <> 
          <main className="page-main">
              <Header/>
              <NavBar/>
              <Modal>
                  <h1 className="head-md">This is Just test</h1>
              </Modal>
                <section className="page-content padding-xs">
                    <div className="videos-container">
                        {
                            videos.map(video => (
                                <VideoCard key={video._id} video={video} isExplore={true}/>
                            ))
                        }
                    </div>
                </section>
          </main>
        </>
    )
}
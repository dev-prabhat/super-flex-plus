import React from "react"
import { useVideo , useFilter} from "../../context"
import { Header, Modal, NavBar, VideoCard , CategoryChip} from "../../components"
import "../commonPage.css"
import "./explore.css"

export const Explore = () => {
    const {categories} = useVideo()
    const {filteredState} = useFilter()
    return(
        <> 
          <main className="page-main">
              <Header/>
              <NavBar/>
              <Modal>
                  <h1 className="head-md">This is Just test</h1>
              </Modal>
                <section className="page-content padding-xs">
                    <div className="categorychip-container">
                        {
                            categories.map(category => (
                                <CategoryChip key={category._id} {...category}/>
                            ))
                        }
                    </div>
                    <div className="videos-container">
                        {
                            filteredState().map(video => (
                                <VideoCard key={video._id} video={video} isExplore={true}/>
                            ))
                        }
                    </div>
                </section>
          </main>
        </>
    )
}
import React from "react"
import { useVideo , useFilter} from "../../context"
import { Header, Modal, NavBar, VideoCard, PlaylistForm , CategoryChip} from "../../components"
import "../commonPage.css"
import "./explore.css"
import { useDocumentTitle } from "../../customHooks"

export const Explore = () => {
    useDocumentTitle("Home")
    const {categories} = useVideo()
    const {filteredState} = useFilter()
    const tempCategories = ["All",...categories]
    return(
        <> 
          <main className="page-main">
              <Header/>
              <NavBar/>
              <Modal>
                 <PlaylistForm/>
              </Modal>
                <section className="page-content padding-xs">
                    <div className="categorychip-container">
                        {
                            tempCategories.map(category => (
                                <CategoryChip key={category} category={category}/>
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
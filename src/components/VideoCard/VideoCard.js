import React from "react"
import "./videoCard.css"

export const VideoCard = ({video}) => {
    const {thumbnail,creator,title} = video
    return(
        <>
          <div className="video-card margin-xs padding-xs">
              <div className="img-container">
                <img className="img-responsive" src={thumbnail} alt="video_thumbnail"/>
              </div>
              <div>
                  <h4 className="video-title text-sm">{title}</h4>
                  <p className="video-creator text-md">{creator}</p>
              </div>
          </div>
        </>
    )
}

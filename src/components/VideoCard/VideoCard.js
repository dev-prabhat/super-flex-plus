import React from "react"
import { GoKebabVertical } from "react-icons/go";
import "./videoCard.css"

export const VideoCard = ({video}) => {
    const {thumbnail,creator,title,avatar} = video
    return(
        <>
          <div className="video-card margin-xs padding-xs">
              <div className="img img-container">
                <img className="img-responsive" src={thumbnail} alt="video_thumbnail"/>
              </div>
              <div className="video-info-container">
                  <div className="avatar-title-container">
                    <div class="avatar avatar-xs">
                      <img
                        class="img-responsive img-round"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <p className="video-creator text-center font-weight-semibold">{creator}</p>
                  </div>
                  <h4 className="video-title text-center text-sm">{title}</h4>
                  <GoKebabVertical className="kebab-icon"/>
              </div>
          </div>
        </>
    )
}

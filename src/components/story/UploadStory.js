import React from 'react'
import "./UploadStory.css"
export const UploadStory = ({profile_picture,profile_name,image}) => {
  return (
    <div className="story">
    <img src={image} alt="" className="story_img" />
    <div className="story_profile_pic">
      <img src={profile_picture} alt="" />
    </div>
    <div className="story_profile_name">{profile_name}</div>
  </div>
  )
}

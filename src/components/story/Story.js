import React from "react";
import { Feeling, LiveVideo, Photo, Plus,ArrowRight } from "../../svg";
import "./Story.css";
import {stories} from "././../../data/home"
import { UploadStory } from "./UploadStory";
export const Story = () => {
  return (
    <div className="creat-story">
      <div className="creat-story-header-card">
        <img src="../../../default_pic.png" alt=""/>
      <div className="plus">
        <Plus  />
      </div>
      <div className="story-text">Create Story</div>
      </div>
{
    stories.map((item,i)=>
    <UploadStory profile_picture={item.profile_picture}  profile_name={item.profile_name} image={item.image}/>
    )
}
<div className="white_circle">
        <ArrowRight color="#65676b" />
      </div>

    </div>
  );
};

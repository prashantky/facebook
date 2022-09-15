import React,{useState} from "react";
import "./CreateStory.css";
import { Feeling, LiveVideo, Photo } from "../../svg";
import Picker from 'emoji-picker-react';
import { CreateStoryPopUp } from "../createstorypopup/CreateStoryPopUp";
// import UserMenu from "../header/userMenu";

export const CreateStory = () => {
  const [visibleIcon,setVisibleIcon]=useState(false)
  const [visibleStoryPopUp,setVisibleStoryPopUp]=useState(true)

  
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src="../../../default_pic.png" alt="" />

        <div className="open_post hover2" onClick={()=>setVisibleStoryPopUp(true)}>
          What's on your mind, Prashant Singh
        </div>
      </div>
      { visibleStoryPopUp && <CreateStoryPopUp/>}

      <div className="create_splitter"></div>
      <div className="createPost_body">
        <div className="createPost_icon hover1">
          <LiveVideo color="#f3425f" />
          Live Video
        </div>
        <div className="createPost_icon hover1">
          <Photo color="#4bbf67" />
          Photo/Video
        </div>
        <div className="createPost_icon hover1">
          <Feeling color="#f7b928" onClick={()=>setVisibleIcon(!visibleIcon)}/>
          {visibleIcon && <Picker/>}
          Feeling/Activity
        </div>
      </div>
    </div>
  );
};

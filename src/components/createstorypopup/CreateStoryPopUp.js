import React, { useState } from "react";
import "./CreateStoryPopUp.css";
import AddToYourPost from "./AddToYourPost";
export const CreateStoryPopUp = () => {
  const [showPrev,setShowPrev]=useState(false)
  return (
    <div className="blur">
      <div className="post-box">
        <div className="box-header">
          <div className="small_circle">
            <i className="exit_icon"></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="box-profile">
          <img src="../../../icons/public.png" alt="" />

          <div className="box-col">Prashant SIngh</div>
          <div className="box_privacy">
          <img src="../../../icons/public.png" alt="" />
          <span>Public</span>
          <i className="arrowDown_icon"></i>
        </div>
        </div>
      {/* {!showPrev ? (
          <>
            <EmojiPickerBackgrounds
              text={text}
              user={user}
              setText={setText}
              showPrev={showPrev}
              setBackground={setBackground}
              background={background}
            />
          </>
        ) : (
          <ImagePreview
            text={text}
            user={user}
            setText={setText}
            showPrev={showPrev}
            images={images}
            setImages={setImages}
            setShowPrev={setShowPrev}
            setError={setError}
          />
        )} */}
        <AddToYourPost setShowPrev={setShowPrev} />
        <button
          className="post_submit"
          // onClick={() => {
          //   postSubmit();
          // }}
          // disabled={loading}
        >
          
          {/* {loading ? <PulseLoader color="#fff" size={5} /> : "Post"} */}
        </button>
        </div>
      </div>
  );
};

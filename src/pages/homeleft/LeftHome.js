import React,{useState} from 'react'
import "./LeftHome.css"
import { LeftLink } from '../../components/leftlink/LeftLink'
import  ArrowDown1  from "../../svg/arrowDown";
// import {Link} from "react-dom"
import { Link } from 'react-router-dom'
import Shortcut from './../../components/shortcut/ShortCut';
import {left} from "../../data/home"
export const LeftHome = () => {
    const [visible,setVisible]=useState(false)
  return (
    <div className='left_home scrollbar'>
        <div className='left-link'>
            <img></img>
            <span>Prashant Singh</span>
        </div>
        {
            left.slice(0,8).map((item,i)=> <LeftLink img={item.img} notifcation={item.notification} text={item.text}
            />)

    }
     {!visible && (
        <div
          className="left-link hover1"
          onClick={() => {
            setVisible(true);
          }}
        >
          <div className="small_circle">
            <ArrowDown1 />
          </div>
          <span>See more</span>
        </div>
      )}
      {visible && (
        <div className="more_left">
          {left.slice(8, left.length).map((link, i) => (
            <LeftLink
              key={i}
              img={link.img}
              text={link.text}
              notification={link.notification}
            />
          ))}
          <div
            className="left-link hover1 "
            onClick={() => {
              setVisible(false);
            }}
          >
            <div className="small_circle rotate360">
              <ArrowDown1 />
            </div>
            <span>Show less</span>
          </div>
        </div>
      )}
      <div className="splitter"></div>
      <div className="shortcut">
        <div className="heading">Your Shortcuts</div>
        <div className="edit_shortcut">Edit</div>
      </div>
      <div className="shortcut_list">
        <Shortcut
          link="https://www.youtube.com/c/MohamedHaJJi1/featured"
          img="../../images/ytb.png"
          name="My Youtube channel"
        />

        <Shortcut
          link="https://www.instagram.com/med_hajji7/"
          img="../../images/insta.png"
          name="My Instagram "
        />
      </div>
      <div className={`fb_copyright ${visible && "relative_fb_copyright"}`}>
        <Link to="/">Privacy </Link>
        <span>. </span>
        <Link to="/">Terms </Link>
        <span>. </span>
        <Link to="/">Advertising </Link>
        <span>. </span>
        <Link to="/">
          Ad Choices <i className="ad_choices_icon"></i>{" "}
        </Link>
        <span>. </span>
        <Link to="/"></Link>Cookies <span>. </span>
        <Link to="/">More </Link>
        <span>. </span> <br />
        Meta ?? 2022
     </div>
    </div>
  )
}

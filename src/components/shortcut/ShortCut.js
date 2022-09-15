import React from 'react'
import './ShortCut.css'
const ShortCut = ({link,img,name}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="shortcut_item">
    <img src={img} alt="" />
    <span>{name}</span>
  </a>  )
}
export default ShortCut

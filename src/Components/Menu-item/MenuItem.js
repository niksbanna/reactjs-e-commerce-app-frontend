import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuItem.scss';

export default function MenuItem({ section }) {
  const { title, imageUrl, size, linkUrl } = section;
  const navigate = useNavigate();
  return (
    <div className={`${size} menu-item`}
      onClick={() => navigate(linkUrl)} >
      <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="content">
        <h1 className="title"> {title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

import React, {useState,useEffect } from "react";
import "./Card.css"; // Assuming you have a CSS file for styling
import Popup from "../popup/Popup";

function Card({ title, text, tags, author, img, img2x, date, views }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="card" onClick={togglePopup}>
      <img
        src={img}
        srcSet={`${img} 1x, ${img2x} 2x`}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <p className="card-tag">{tags}</p>
        <h3 className="card-title">{title}</h3>
        <div className="card-info">
          <span className="card-author">{author}</span>
          <span className="card-date">{date}</span>
          <span className="card-views">{views}</span>
        </div>
        <p className="card-text">{text}</p>
      </div>
      <Popup isOpen={isPopupOpen} onClose={togglePopup} cardData={{ title, text, tags, author, img,img2x, date, views }} />
    </div>
  );
}

export default Card;

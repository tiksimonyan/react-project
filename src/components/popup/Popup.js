import React, { useEffect, useRef } from "react";
import "./Popup.css"; // Assuming you have a CSS file for styling

function Popup({ isOpen, onClose, cardData }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
            ref={popupRef}
          >
            <span className="close-btn" onClick={onClose}>
              &#x2716;
            </span>
            <div className="popup-card">
              <img
                src={cardData.img}
                srcSet={`${cardData.img} 1x, ${cardData.img2x} 2x`}
                alt={cardData.title}
                className="card-image"
              />
              <h2>{cardData.title}</h2>
              <p>{cardData.text}</p>
              <p>Tags: {cardData.tags}</p>
              <p>Author: {cardData.author}</p>
              <p>Date: {cardData.date}</p>
              <p>Views: {cardData.views}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;

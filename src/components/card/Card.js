import React from "react";
import "./Card.css"; // Assuming you have a CSS file for styling

function Card({ title, text, tags, author, img, img2x, date, views }) {
  return (
    <div className="card">
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
    </div>
  );
}

export default Card;

import React from 'react';
import './ImgCard.scss';

const ImgCard = props => {
  const {
    color, number, name, year, width,
  } = props;

  return (
    <div className="imgCard-container">
      <div
        className="imgCard-upper"
        style={{ backgroundColor: color, width, height: width }}
      />
      <div className="imgCard-bottom">
        <p>PANTONE</p>
        <p>{number}</p>
        <p>{name}</p>
        <p style={{ color, fontWeight: 'bold' }}>{year}</p>
      </div>
    </div>
  );
};

export default ImgCard;

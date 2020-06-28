import React from 'react';
import ImgCard from './ImgCard';
import data from './data';
import './index.scss';

const Carousel = props => {
  const {
    children,
  } = props;

  const onClickMove = e => {

  };

  return (
    <>
      <div className="carousel-container">
        <span className="carousel-title">Past Colors of the Year</span>
        <div className="divider" />
        <div className="carousel-contents">
          <div className="carousel-card-container">
            {data.map(el => (
              <ImgCard color={el.color} number={el.number} name={el.name} year={el.year} key={el.name} />

            ))}
          </div>
          <div className="swiper-container">
            <span>{'<'}</span>
            <span>{'>'}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

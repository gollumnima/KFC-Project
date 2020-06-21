import React from 'react';
import ImgCard from './ImgCard';
import data from './data';

const Carousel = props => {
  const {
    children,
  } = props;

  return (
    <>
      <div className="carousel-container" style={{ display: 'flex' }}>
        {data.map(el => (
          <ImgCard color={el.color} number={el.number} name={el.name} year={el.year} key={el.name} />

        ))}
      </div>
    </>
  );
};

export default Carousel;

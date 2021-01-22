import React from 'react';
import Carousel from './Carousel';
import data from './data';

const CarouselTest = () => {
  console.log(data);
  return (
    <div>
      <h2>Carousel - slidesToShow: 3, slidesToScroll:3</h2>
      <Carousel
        slidesToShow={3}
        slidesToScroll={3}
        data={data}
        width={150}
      />
      <h2>Carousel - slidesToShow: 5, slidesToScroll:5</h2>
      <Carousel
        slidesToShow={5}
        slidesToScroll={5}
        data={data}
        width={150}
      />

      <h2>Carousel - slidesToShow: 7, slidesToScroll:7</h2>
      <Carousel
        slidesToShow={7}
        slidesToScroll={7}
        data={data}
        width={150}
      />

      <h2>Carousel - slidesToShow: 3, slidesToScroll:3, isInfinite, autoPlay</h2>
      <Carousel
        isInfinite
        slidesToShow={3}
        slidesToScroll={3}
        data={data}
        width={150}
        autoPlay
        autoPlaySpeed={3}
      />
    </div>
  );
};
export default CarouselTest;

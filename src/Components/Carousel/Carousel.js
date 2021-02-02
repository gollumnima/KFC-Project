import React, { useState, useEffect } from 'react';
import ImgCard from './ImgCard';
import './carousel.scss';

const Carousel = props => {
  const {
    isInfinite, slidesToShow, slidesToScroll, data, width, autoPlay, autoPlaySpeed,
  } = props;

  const fullWidth = width * slidesToShow + 15;
  const speed = autoPlaySpeed * 1000;
  const [current, setCurrent] = useState(0);
  const [currentSlide, setCurrentSlide] = useState([]);

  useEffect(() => {
    setCurrentSlide(data.slice(current, current + slidesToShow));
  }, [data, current, slidesToShow]);

  const handleClick = e => {
    const { className } = e.target;
    if (current < 0) {
      setCurrent(0);
    }
    if (current >= data.length) {
      setCurrent(data.length - slidesToShow);
    }
    return className.includes('right') ? setCurrent(current + slidesToScroll) : setCurrent(current - slidesToScroll);
  };

  // !autoPlay && (useEffect(() => {
  //   const start = current;
  //   const end = current + slidesToShow;
  //   console.log(current, 'startpoint');
  //   console.log(end % slidesToShow, 'end 나머지');
  //   if (end % slidesToScroll !== 0) {
  //     setCurrentSlide(data.slice(data.length - slidesToScroll, data.length));
  //   } else {
  //     setCurrentSlide(data.slice(start, end));
  //   }
  // }, [current]))();

  const handleAutoPlay = () => {
    const nextIdx = (current + slidesToShow) % data.length;

    setTimeout(() => {
      setCurrent(nextIdx);
      setCurrentSlide(data.slice(current, current + slidesToScroll));
    }, speed);
  };

  console.log(current, 'current');
  useEffect(() => {
    autoPlaySpeed && setInterval(

      () => handleAutoPlay(),

      //   setCurrent(end);
      //   if (end >= data.length) {
      //     setCurrentSlide(data.length - slidesToScroll, data.length);
      //   } else {
      //     setCurrentSlide(data.slice(start, end));
      //   }
      300000000,
    );
  }, [current]);

  return (
    <div className="carousel">
      <button
        className="carousel__left"
        type="button"
        onClick={e => !!autoPlay || handleClick(e)}
      />
      <div
        className="carousel__wrapper"
        style={{ width: `${fullWidth}px`, maxWidth: `${fullWidth}px` }}
      >
        {
        currentSlide.map(el => (
          <ImgCard
            key={el.name}
            color={el.color}
            number={el.number}
            name={el.name}
            year={el.year}
            width={width}
          />
        ))
}
      </div>
      <button
        className="carousel__right"
        onClick={e => !autoPlay && handleClick(e)}
      />
    </div>
  );
};
export default Carousel;

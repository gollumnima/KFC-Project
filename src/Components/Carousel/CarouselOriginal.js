import React, { useState } from 'react';
import ImgCard from './ImgCard';
import data from './data';
import './index.scss';

const Carousel = props => {
  const [startIdx, setStartIdx] = useState(0);
  const [addedIdx, setAddedIdx] = useState(7);
  const [losedIdx, setLosedIdx] = useState(startIdx);

  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null);

  const isCurrent = content => {
    const right = next === null ? current : next;
    return content && content.key === right;
  };

  const switchNext = key => {
    const next = key || setCurrent(current + 1) % props.slides.length;
  };

  const findeSlide = (slides, key, render) => {
    const slide = slides.filter(slide => slide.key === key)[0];
    if (!slide) return <></>;
    return render(slide);
  };

  // const onClickLeft = () => {
  //   if (startIdx === data.length - 1) {
  //     setStartIdx(addedIdx);
  //   } else if (data.length - startIdx < 8) {
  //     setLosedIdx(data.length - 1 - startIdx - 7);
  //   } else {
  //     setStartIdx(startIdx - 7);
  //   }
  // };

  // const onClickRight = () => {
  //   if (startIdx === data.length - 1) {
  //     setStartIdx(0);
  //   } else if (data.length - startIdx < 8) {
  //     setAddedIdx(data.length - 1 - startIdx + 7);
  //   } else {
  //     setStartIdx(startIdx + 7);
  //   }
  // };

  const startingPoint = data.slice(startIdx);
  return (
    <>
      <div className="carousel-container">
        <span className="carousel-title">Past Colors of the Year</span>
        <div className="divider" />
        <div className="carousel-contents">
          <div className="carousel-card-container">
            {/* {data.slice(startIdx, startIdx + addedIdx).map(el => (
              <ImgCard color={el.color} number={el.number} name={el.name} year={el.year} key={el.name} />
            ))} */}
            {
  Array.from(new Set(startingPoint.concat(data.slice(addedIdx)))).map(el => (
    <ImgCard color={el.color} number={el.number} name={el.name} year={el.year} key={el.name} />
  ))
}
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

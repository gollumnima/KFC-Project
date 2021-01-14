import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  console.log();
  return (
    <div className="landing-container">
      <h3>작고 소중한 컴포넌트</h3>
      <ul>
        <li>
          <Link to="/carousel">Carousel</Link>
        </li>
        <li>
          <Link to="/checkbox">CheckBox</Link>
        </li>
      </ul>
    </div>
  );
};

export default Landing;

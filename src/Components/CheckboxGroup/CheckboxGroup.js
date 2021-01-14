import React, { useState, createRef } from 'react';
import './checkboxGroup.scss';

const CheckboxGroup = props => {
  const { label } = props;
  const hiddenCheckbox = createRef();
  const [check, setCheck] = useState(false);

  const handleChange = e => {
    setCheck(!e.target.checked);
  };

  const handleCheckboxClick = () => {
    setCheck(!hiddenCheckbox.current.checked)
  };

  console.log(check)
  return (
    <div className="checkbox">
      <div className="checkbox__wrapper">
        <div className="checkbox__circle" onClick={()=>handleCheckboxClick()}>
          <svg
            className="checkbox__svg"

            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 479.104 479.104"
          >
            <path
              d="M471.121,113.606l-50.758-50.741c-10.642-10.644-27.881-10.644-38.522,0L180.146,264.574L97.303,181.73c-10.644-10.643-27.898-10.658-38.538-0.017L7.99,232.504C-2.653,243.146-2.668,260.4,7.974,271.043L148.14,411.226
c17.287,17.284,45.31,17.333,62.659,0.11c64.093-63.647,208.114-207.158,260.291-259.145c5.129-5.111,8.014-12.043,8.014-19.275
  C479.12,125.668,476.235,118.736,471.121,113.606z"
              // style={{ fill: `${check} ? #F5DF4E : #949597` }}
              fill={`${check}?#F5DF4E : #949597`}
            />
          </svg>

        </div>
        <div className="checkbox__input__wrapper">
          <label htmlFor="checkbox-group">{label}</label>
          <input
            type="checkbox"
            ref={hiddenCheckbox}
            onChange={e => handleChange(e)}
            checked={check}
            name="checkbox-group"
          />
        </div>
        wq
      </div>
    </div>
  );
};

export default CheckboxGroup;

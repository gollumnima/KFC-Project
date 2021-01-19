import React, { useState } from 'react';
import './checkboxGroup.scss';

const CheckboxGroup = props => {
  const { options } = props;
  const [values, setValues] = useState([]);
  const [all, setAll] = useState(false);
  const allValues = options.filter(el => !el.disabled).map(el => el.value);

  const handleValue = value => {
    const unselected = [];

    if (!(values.includes(value))) {
      setValues(values.concat(value));
    } else if (values.includes(value)) {
      unselected.push(value);
      setValues(values.filter(el => !unselected.includes(el)));
    }
  };

  const handleAllValues = () => {
    // 이렇게 하면 disabled는 false로 들어가긴 하는데, UI적으론 화면에 나타나지 않음.
    console.log(allValues.length);
    const areEqual = (a, b) => a.length === b.length && a.every((item, i) => b[i] === item);

    if (!areEqual(allValues, values)) {
      setValues(allValues);
      setAll(true);
    } else {
      setValues([]);
      setAll(false);
    }
  };

  console.log(values, 'va');

  return (
    <div className="checkbox">
      <div className="checkbox__wrapper">
        <label>
          <input
            type="checkbox"
            onChange={() => handleAllValues()} // 현재 상황에 따라 select쓸지 unselect쓸지 정하게 하기
            checked={all}
            value={all}
          />
          <div
            className="checkbox__circle"
          >
            {values.length === allValues.length
              ? (
                <svg
                  className="checkbox__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 479.104 479.104"
                >
                  <path
                    d="M471.121,113.606l-50.758-50.741c-10.642-10.644-27.881-10.644-38.522,0L180.146,264.574L97.303,181.73c-10.644-10.643-27.898-10.658-38.538-0.017L7.99,232.504C-2.653,243.146-2.668,260.4,7.974,271.043L148.14,411.226
    c17.287,17.284,45.31,17.333,62.659,0.11c64.093-63.647,208.114-207.158,260.291-259.145c5.129-5.111,8.014-12.043,8.014-19.275
      C479.12,125.668,476.235,118.736,471.121,113.606z"
                    style={{ fill: all ? '#F5DF4E' : '#949597' }}
                  />
                </svg>
              )
              : (
                <svg
                  className="checkbox__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -192 469.33333 469"
                >
                  <path
                    d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"
                    style={{ fill: '#F5DF4E' }}
                  />
                </svg>
              )}
          </div>
          전체 선택
        </label>
      </div>
      {options.map(el => {
        const isSelected = values.filter(value => value === el.value).length || 0;

        return (
          <div key={el.value}>
            {`isSelected ${String(isSelected)}`}
            <div className="checkbox__wrapper">

              <div className="checkbox__input__wrapper">
                <label style={el.disabled && { cursor: 'no-drop', color: '#bdbdbd' }}>
                  <input
                    type="checkbox"
                    onChange={() => handleValue(el.value)} // 현재 상황에 따라 select쓸지 unselect쓸지 정하게 하기
                    checked={isSelected}
                    value={el.value}
                    disabled={el.disabled}
                  />
                  <div
                    className="checkbox__circle"
                  >
                    <svg
                      className="checkbox__svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 479.104 479.104"
                    >
                      <path
                        d="M471.121,113.606l-50.758-50.741c-10.642-10.644-27.881-10.644-38.522,0L180.146,264.574L97.303,181.73c-10.644-10.643-27.898-10.658-38.538-0.017L7.99,232.504C-2.653,243.146-2.668,260.4,7.974,271.043L148.14,411.226
    c17.287,17.284,45.31,17.333,62.659,0.11c64.093-63.647,208.114-207.158,260.291-259.145c5.129-5.111,8.014-12.043,8.014-19.275
      C479.12,125.668,476.235,118.736,471.121,113.606z"
                        style={{ fill: isSelected ? '#F5DF4E' : '#949597' }}
                      />
                    </svg>

                  </div>
                  {el.label}
                </label>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxGroup;

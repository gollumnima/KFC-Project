import React from 'react';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import Input from './Input';

const options = [
  { value: 123, label: '숫자 123' },
  { value: false, label: '불린 false' },
  { value: 0, label: '숫자 0' },
  { value: 'foo', label: '문자열 foo~' },
  { value: 'bar', label: '나는 disabled', disabled: true },
];

const initialValue = 123;
const initialArray = [];

const reducer = (acc, curr) => ({ ...acc, ...curr });

const InputsTest = () => {
  const [data, setData] = React.useReducer(reducer, {
    radio1: initialValue,
    radio2: initialValue,
    radio3: initialValue,
    check1: initialArray,
  });

  return (
    <div>
      <div>
        <h2>Checkbox Group</h2>
        <CheckboxGroup
          options={options}
          onChange={v => setData({ check1: v })}
          value={data.check1}
        />
        <h2>Radio Group</h2>
        <h4>Original Radio</h4>
        <RadioGroup
          options={options}
          onChange={v => setData({ radio3: v })}
          value={data.radio3}
        />
        <h4>Radio Group - option type is button</h4>
        <RadioGroup
          options={options}
          optionType="button"
          onChange={v => setData({ radio2: v })}
          value={data.radio2}
        />
        <h4>Radio Group - option type is button</h4>
        <RadioGroup
          options={options}
          optionType="button"
          buttonStyle="solid"
          onChange={v => setData({ radio1: v })}
          value={data.radio1}
        />
        <h2>Input</h2>
        <h4>Input number</h4>
        <Input type="number" />
        <h4>Input password</h4>
        <Input type="password" />

      </div>
    </div>
  );
};

export default InputsTest;

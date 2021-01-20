import React from 'react';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';

const options = [
  { value: 123, label: '숫자 123' },
  { value: false, label: '불린 false' },
  { value: 0, label: '숫자 0' },
  { value: 'foo', label: '문자열 foo~' },
  { value: 'bar', label: '나는 disabled', disabled: true },
];

const InputsTest = () => (
  <div>
    <div>
      <h2>Checkbox Group</h2>
      <CheckboxGroup
        options={options}
      />
      <h2>Radio Group</h2>
      <RadioGroup options={options} optionType="button" />

    </div>
  </div>
);

export default InputsTest;

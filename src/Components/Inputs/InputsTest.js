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

const InputsTest = () => (
  <div>
    <div>
      <h2>Checkbox Group</h2>
      <CheckboxGroup
        options={options}
      />
      <h2>Radio Group</h2>
      <h4>Original Radio</h4>
      <RadioGroup options={options} />
      <h4>Radio Group - option type is button</h4>
      <RadioGroup options={options} optionType="button" />
      <h4>Radio Group - option type is button</h4>
      <RadioGroup
        options={options}
        optionType="button"
        buttonStyle="solid"
      />
      <h2>Input</h2>
      <h4>Input number</h4>
      <Input type="number" />
      <h4>Input password</h4>
      <Input type="password" />

    </div>
  </div>
);

export default InputsTest;

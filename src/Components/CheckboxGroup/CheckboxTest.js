import React from 'react';
import CheckboxGroup from './CheckboxGroup';

const CheckboxTest = () => (
  <div>
    <div>
      <CheckboxGroup label="동의하십니끼/?" />
      <CheckboxGroup />
      <CheckboxGroup />
      <CheckboxGroup label="완전히 동의하세요 정말로??" />

    </div>
  </div>
);

export default CheckboxTest;

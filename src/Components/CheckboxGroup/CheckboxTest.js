import React from 'react';
import CheckboxGroup from './CheckboxGroup';

const CheckboxTest = () => (
  <div>
    <div>
      {/* <CheckboxGroup label="동의하십니끼/?" />
      <CheckboxGroup />
      <CheckboxGroup />
      <CheckboxGroup label="완전히 동의하세요 정말로??" /> */}
      <CheckboxGroup
        options={[{ value: 123, label: '숫자 123 입니다.' },
          { value: false, label: '불린 false 입니다' },
          { value: 0, label: '숫자 0 ....' },
          { value: 'foo', label: '문자열 foo~' },
          { value: 'bar', label: '나는 disabled 상태라서 선택이 안됩니다', disabled: true },
        ]}
      />
    </div>
  </div>
);

export default CheckboxTest;

import React from 'react';
import { ComplexTitleProps } from './ComplexTitle.types';
import { Wrapper } from './ComplexTitle.styles';

const ComplexTitle: React.FC<ComplexTitleProps> = ({ title, children }) => {
  return (
    <Wrapper className="bg-grey">
      {children}
      <h1>{title}</h1>
      <div className="underline"></div>
      <h1 className='title'>{title}</h1>
    </Wrapper>

  );
};

export default ComplexTitle;

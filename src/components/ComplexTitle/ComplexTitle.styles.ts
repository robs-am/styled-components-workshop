import styled from 'styled-components';
import { ComplexTitleProps } from './ComplexTitle.types';

export const Wrapper = styled.div<ComplexTitleProps>`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  h1 {
    text-transform: uppercase;
    text-align: center;
  }
  .underline {
    background-color: green;
    width: 5rem;
    height: 0.25rem;
    margin: 0 auto;
  }
`;

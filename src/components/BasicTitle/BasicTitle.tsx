import React from 'react';
import { StyledTitle } from './BasicTitle.styles';

interface BasicTitleProps {
  children: React.ReactNode;
  special?: boolean;
  fontSize?: string;
}

const BasicTitle: React.FC<BasicTitleProps> = ({ children, special }) => {
  return <StyledTitle special={special}>{children}</StyledTitle>;
};

export default BasicTitle;

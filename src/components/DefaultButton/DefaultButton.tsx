import React from 'react';
import { StyledButton } from './DefaultButton.styles';
import { DefaultButtonProps } from './DefaultButton.types';

const DefaultButton: React.FC<DefaultButtonProps> = ({ children, primary }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default DefaultButton;

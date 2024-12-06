import React from 'react';
import { StyledButton } from './DefaultButton.styles';


interface StyledButton {
  children: React.ReactNode;
  primary?: boolean;
}
const DefaultButton: React.FC<StyledButton> = ({ children, primary }) => {
  return <DefaultButton primary={primary}>{children}</DefaultButton>;
};

export default DefaultButton;

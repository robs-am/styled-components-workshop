import styled from 'styled-components';
import { DefaultButtonProps } from './DefaultButton.types';

export const StyledButton = styled.button<Pick<DefaultButtonProps, 'primary'>>`
  background-color: ${({ primary }) => (primary ? '#3498db' : '#f1356d')};
  border: none;
  padding: ${({ primary }) => (primary ? '12px 20px' : '10px 15px')};
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#2980b9' : '#d12e5b')};
  }
`;

export const HipsterButton = styled(StyledButton)<DefaultButtonProps>`
  background-color: #f1c40f;
  color: #2c3e50;

  &:hover {
    background-color: #f39c12;
  }
`;

import styled from 'styled-components';

interface StyledButtonProps {
  primary?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ primary }) => (primary ? '#3498db' : '#f1356d')};
  border: none;
  padding: ${({ primary }) => (primary ? '12px 20px' : '10px 15px')};
  border-radius: 8px;
  color: white;
  cursor: pointer;
`;

// export const HipsterButton = styled(StyledButton)`
//   background-color: #f1356d;
//   color: white;
//   font-size: 1.5rem;
//   padding: 10px 15px;
//   border-radius: 10px;
// `;

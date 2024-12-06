import styled from 'styled-components';

interface StyledTitleProps {
  special?: boolean;
  fontSize?: string;
}

export const StyledTitle = styled.h1<StyledTitleProps>`
  color: ${(props) => (props.special ? 'red' : 'slategrey')};
  text-transform: capitalize;
`;

import styled from 'styled-components';

interface ContainerProps {
  bgColor?: string,
  fluid?: boolean
}

export const Container = styled.div<ContainerProps>`
  margin: auto;
  max-width: ${props => props.bgColor ? 'none' : '1000px'};
  background-color: ${props => props.bgColor};
  text-align: center;
  
`;

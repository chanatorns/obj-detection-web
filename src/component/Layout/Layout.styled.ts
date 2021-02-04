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
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 95vh;
`;

export const PreviewWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const AnalyzeButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f8ff5c;
`;

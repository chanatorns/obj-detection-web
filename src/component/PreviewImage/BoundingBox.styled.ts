import styled from 'styled-components';

type BoxProps = {
  top: string
  left: string,
  width: string,
  height: string,
  fold: boolean
}

export const Box = styled.div<BoxProps>`
  cursor: pointer;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  height: ${props => props.fold ? 0 : props.height};
  box-shadow: ${props => props.fold
    ? 'none'
    : 'rgb(3 102 214 / 70%) 0px 0px 0px 1px'};

  &:hover {
    box-shadow: ${props => props.fold
    ? 'none'
    : 'rgb(3 102 214 / 70%) 0px 0px 0px 2px'};
  }
`;

export const Data = styled.div`
  cursor: pointer;
  overflow: visible;
  width: max-content;
  background-color: #ffffff54;
  padding: 0 7px;
  font-size: 12px;
  position: absolute;
  top: -20px;
  left: -2px;
  border-radius: 7px;
`;

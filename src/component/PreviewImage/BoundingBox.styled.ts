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
    : 'rgb(3 102 214 / 70%) 0px 0px 0px 2px'};

  &:hover {
    box-shadow: ${props => props.fold
    ? 'none'
    : 'rgb(3 102 214 / 70%) 0px 0px 0px 3px'};
  }
`;

type DataProps = {
  isBoxHover: boolean,
  fold: boolean,
  dataFoldPos: {
    top: string,
    left: string
  }
}

export const Data = styled.div<DataProps>`
  cursor: pointer;
  overflow: visible;
  width: max-content;
  background-color: ${props => props.isBoxHover ? `#ffffff` : `#ffffff85` };
  padding: 0 7px;
  font-size: 12px;
  position: absolute;
  top: ${props => props.fold ? props.dataFoldPos.top : `-20px`};
  left: ${props => props.fold ? props.dataFoldPos.left : `-2px`};
  border-radius: 7px;
  transition: all 0.2s;
`;

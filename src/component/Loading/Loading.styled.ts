import styled from 'styled-components';

export const LoadingIcon = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 7px solid #fff;
    border-radius: 100%;
    animation: lds-ring 1.2s cubic-bezier(0.7, 0.3, 0.2, 0.9) infinite;
    border-color: #cacaca transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0s;
  }
  div:nth-child(2) {
    animation-delay: -0.1s;
  }
  div:nth-child(3) {
    animation-delay: -0.2s;
  }
  div:nth-child(4) {
    animation-delay: -0.3s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
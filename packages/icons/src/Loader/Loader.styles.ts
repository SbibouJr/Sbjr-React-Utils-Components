import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  i {
    animation-name: ${rotate};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    &.fa:hover {
      cursor: progress;
    }
  }
`;

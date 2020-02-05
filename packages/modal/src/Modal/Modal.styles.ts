import styled, { css } from 'styled-components';
import Icon from '@sbjr-react-utils-components/icons';

const successBackgroundColor = 'white';
const successBorderColor = 'green';
const informationBackgroundColor = 'white';
const informationBorderColor = 'blue';
const warningBackgroundColor = 'white';
const warningBorderColor = 'orange';
const dangerBackgroundColor = 'grey';
const dangerBorderColor = 'red';

export const ModalBackground = styled.div<{ show: boolean }>`
  * {
    box-sizing: border-box;
  }
  top: 0px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0px;
  overflow: hidden;
  z-index: 1000;
  ${({ show }) =>
    show &&
    css`
      width: 100%;
      height: 100%;
      overflow-y: auto;
      background-color: rgba(0, 0, 0, 0.8);
    `}
`;

export const ModalContainer = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  &.success {
    background-color: ${successBackgroundColor};
    border: ${successBorderColor} 2px solid;
  }
  &.information {
    background-color: ${informationBackgroundColor};
    border: ${informationBorderColor} 2px solid;
  }
  &.warning {
    background-color: ${warningBackgroundColor};
    border: ${warningBorderColor} 2px solid;
  }
  &.danger {
    background-color: ${dangerBackgroundColor};
    border: ${dangerBorderColor} 2px solid;
  }
`;

export const ModalHeader = styled.div`
  position: relative;
`;

export const ModalHeaderTitle = styled.h2`
  padding: 20px;
  padding-right: 50px;
  margin: 0;
  width: 100%;
  text-align: center;
`;

export const ModalIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const ModalBody = styled.div`
  text-align: center;
  margin: 10px 20px 20px 10px;
  overflow: auto;
`;

export const ModalFooter = styled.div`
  text-align: center;
  button {
    margin: 10px 20px 10px 20px;
  }
`;

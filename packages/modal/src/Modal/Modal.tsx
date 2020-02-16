import React from 'react';

import { CLASS_ICON } from '@sbjr-react-utils-components/icons';

import * as Styled from './Modal.styles';
import { IModalProps } from './Modal.interfaces';

export const Modal = ({
  className = '',
  show = false,
  title = 'Modal title',
  body = 'Modal content',
  typeModal = 'information',
  onClose,
  footerElements = [],
}: IModalProps) => (
  <Styled.ModalBackground
    show={show}
    className={`sbjr-modal-background ${className}`}
  >
    <Styled.ModalContainer className={`sbjr-modal-container ${typeModal}`}>
      <Styled.ModalHeader className="sbjr-modal-header">
        <Styled.ModalHeaderTitle>{title}</Styled.ModalHeaderTitle>
        <Styled.ModalIcon
          classIcon={CLASS_ICON.TIMES}
          onClick={() => onClose && onClose()}
        />
      </Styled.ModalHeader>
      <Styled.ModalBody className="sbjr-modal-body">{body}</Styled.ModalBody>
      <Styled.ModalFooter className="sbjr-modal-footer">
        {footerElements.map(component => component)}
      </Styled.ModalFooter>
    </Styled.ModalContainer>
  </Styled.ModalBackground>
);

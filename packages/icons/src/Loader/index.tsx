import React from 'react';

import { Icon } from '../Icon';
import { CLASS_ICON } from '../constantes';

import * as Styled from './Loader.styles';

export const Loader = () => (
  <Styled.LoaderContainer className="sbjr-loader">
    <Icon classIcon={CLASS_ICON.CIRCLE_NOTCH} />
  </Styled.LoaderContainer>
);

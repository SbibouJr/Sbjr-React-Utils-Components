import React from 'react';

import * as Styled from './Icon.styles';

import { CLASS_ICON } from '../constantes';
import { IIconProps } from './Icon.interfaces';

export const Icon = ({
  classIcon = CLASS_ICON.TIMES,
  className = '',
  disabled = false,
  onClick = null,
  ...rest
}: IIconProps) => (
  <Styled.Icon
    className={`sbjr-icon ${classIcon} ${className} ${
      disabled ? 'disabled' : ''
    } ${onClick !== null ? 'clickable' : ''}`}
    onClick={disabled || onClick === null ? () => {} : onClick}
    {...rest}
  />
);

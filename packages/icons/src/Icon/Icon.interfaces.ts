import { MouseEvent } from 'react';

export interface IIconProps {
  classIcon?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
}

import styled from 'styled-components';

export const Icon = styled.i`
  &.fa,
  &.fas,
  &.fab {
    vertical-align: middle;
    line-height: 38px;
    font-size: 38px;
    transition: 0.2s;
    &.clickable {
      &:hover:not(.disabled) {
        transform: scale(1.1);
        cursor: pointer;
      }
      &.disabled {
        color: rgba(0, 0, 0, 0.2) !important;
        cursor: not-allowed;
      }
    }
  }
`;

export interface IModalProps {
  className?: string;
  show: boolean;
  typeModal?: TModalType;
  title?: (() => JSX.Element) | JSX.Element | string;
  body?: (() => JSX.Element) | JSX.Element | string;
  footerButtons?: Array<(() => JSX.Element) | JSX.Element | string>;
  onClose?: () => void;
}

export type TModalType = 'warning' | 'danger' | 'success' | 'information';

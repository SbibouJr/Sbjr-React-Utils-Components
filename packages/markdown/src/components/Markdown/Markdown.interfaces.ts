import { IMarkdownConfig } from '../../config/markdown';

export interface IMarkdownProps {
  children: string;
  config?: IMarkdownConfig;
}

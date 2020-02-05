import { IMarkdownConfig } from './markdown.interfaces';

export const MARKDOWN_DEFAULT_CONFIG: IMarkdownConfig = {
  html: false,
  xhtmlOut: false,
  breaks: true,
  langPrefix: 'language-',
  linkify: false,
  typographer: false,
  quotes: '“”‘’',
  highlight: () => '',
};

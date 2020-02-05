import MarkdownIt from 'markdown-it';
import prism from 'markdown-it-prism';

import {
  MARKDOWN_DEFAULT_CONFIG,
  IMarkdownConfig,
} from '../../config/markdown';

/**
 * Get a markdown string and return an html string
 * @param content - string to parse
 * @param config - markdown options
 * @return html string parsed
 */
export function parseMarkdownToHtml(
  content: string,
  config: IMarkdownConfig = {},
) {
  const newConfig = {
    ...MARKDOWN_DEFAULT_CONFIG,
    ...config,
  };
  return MarkdownIt(newConfig)
    .use(prism)
    .render(content);
}

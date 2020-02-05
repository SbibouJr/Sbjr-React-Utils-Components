import React from 'react';
import MarkdownIt from 'markdown-it';
import prism from 'markdown-it-prism';

import { MARKDOWN_DEFAULT_CONFIG } from '../../config/markdown';
import { IMarkdownProps } from './Markdown.interfaces';

const Markdown = ({ children, config = {} }: IMarkdownProps) => {
  const newConfig = {
    ...MARKDOWN_DEFAULT_CONFIG,
    ...config,
  };

  const createMarkup = () => ({
    __html: MarkdownIt(newConfig)
      .use(prism)
      .render(children),
  });

  return (
    <div
      className="sbjr-markdown-container"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={createMarkup()}
    />
  );
};

export default Markdown;

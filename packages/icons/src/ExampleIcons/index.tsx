import React from 'react';

import { Icon } from '../Icon';
import { CLASS_ICON } from '../constantes';

export const ExampleIcons = () => (
  <>
    {Object.keys(CLASS_ICON).map(key => (
      <div key={key}>
        <p>id: {key}</p>
        <Icon classIcon={CLASS_ICON[key]} />
      </div>
    ))}
  </>
);

// Please note: Basic configuration used to be done in this file, but is no longer!
// Use StudioTemplate.tsx for pre-made song visualizations you intend to render and save,
// or use LiveTemplate.tsx for real-time audio input.

import React from 'react';
import ReactDOM from 'react-dom';
import StudioTemplate from './StudioTemplate';
import LiveTemplate from './LiveTemplate';

ReactDOM.render(
  window.location.href.includes('live=true')
    ? <LiveTemplate />
    : <StudioTemplate />,
  document.getElementById('root')
);

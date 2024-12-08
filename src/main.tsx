import { AppLayout } from '@cloudscape-design/components';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import '@cloudscape-design/global-styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout
      navigationHide
      toolsHide
      content={<App />}
      maxContentWidth={800}
      minContentWidth={800}
    />
  </StrictMode>,
);

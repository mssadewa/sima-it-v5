import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import StyledComponent from './Styled';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={StyledComponent.theme}>
      <StyledComponent.GlobalCss />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

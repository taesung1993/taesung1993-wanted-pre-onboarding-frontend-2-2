import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './components/GlobalStyle';
import Router from './components/Router';
import theme from './utils/constants/theme';

function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;

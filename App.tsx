import React, { ReactNode } from 'react';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/contexts/themeContext/ThemeContext';

const AppState = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

export default App;

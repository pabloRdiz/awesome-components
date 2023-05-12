import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NAvigator } from './src/navigator/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <NAvigator />
    </NavigationContainer>
  );
};

export default App;

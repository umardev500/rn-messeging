import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from './src/routers';
import { colors } from './src/themes';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.primary[500]} />
      <Router />
    </SafeAreaProvider>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.light.white}
        />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
            <Routes />
          </NavigationContainer>
        </GestureHandlerRootView>
      </ThemeProvider>
    </Provider>
  );
}
export default App;

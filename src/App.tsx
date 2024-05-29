/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStack from './stacks/main/MainStack';
import Loading from './component/common/loading';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
          <Navigator />
        </SafeAreaProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.container}>
        <MainStack />
        <Loading />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

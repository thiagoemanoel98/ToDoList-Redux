/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Home} from './src/pages/Home';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// https://dev.to/arunavamodak/make-a-simple-todo-app-using-react-and-reduxtoolkit-2d4i
// https://javascript.plainenglish.io/how-to-build-a-simple-todo-app-in-react-native-using-redux-toolkit-eb9ca5409a1d

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Home />
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaView>
  );
};
export default App;

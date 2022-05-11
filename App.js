/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import TextCount from './component/TextCount';
import NumberCount from './component/NumberCount';

function App() {
  return (
    <SafeAreaView>
      <TextCount/>
      <NumberCount />
    </SafeAreaView>
  );
}

export default App;

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
import ToDoList from './component/todolist';
import UserAdd from './component/userAdd';

function App() {
  return (
    <SafeAreaView>
      <TextCount/>
      <NumberCount />
      <ToDoList/>
      <UserAdd/>
    </SafeAreaView>
  );
}

export default App;

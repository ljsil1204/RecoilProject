/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const textState = atom({
  key: 'textState',
  default: '',
});

function Input() {
  const [text, setText] = useRecoilState(textState);

  return (
    <View>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Text>Text : {text}</Text>
    </View>
  );
}

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  },
});

function Counter() {
  const count = useRecoilValue(charCountState);

  return (
    <View>
      <Text>Count : {count}</Text>
    </View>
  );
}

function CharCounter() {
  return (
    <View>
      <Input />
      <Counter />
    </View>
  );
}

function TextCount() {
  return (
    <View>
      <CharCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextCount;

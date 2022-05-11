import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRecoilValue} from 'recoil';
import {countWithStringState } from './CountAtom';

function DisplayNumber() {

  // const [count, _] = useRecoilState(countAtom);

  const count = useRecoilValue(countWithStringState);

  return (
    <View>
      <Text>현재숫자 : {count}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  
});


export default DisplayNumber;
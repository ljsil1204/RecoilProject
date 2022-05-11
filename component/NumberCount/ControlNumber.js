import React from 'react';
import {View, Button,StyleSheet} from 'react-native';
import {useRecoilState} from 'recoil';
import { countAtom } from './CountAtom';

function ControlNumber() {

  const [count, setCount] = useRecoilState(countAtom);

  const increase = () => {
    setCount(count+1);
  }

  const decrease = () => {
    setCount(count-1);
  }

  return (
    <View style={styles.row}>
      <Button title='+' onPress={increase}/>
      <Button title='-' onPress={decrease}/>
    </View>
  );

}

const styles = StyleSheet.create({
  row: {
    flexDirection : 'row',
    marginVertical : 40
  },
});


export default ControlNumber;
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userListState } from '../../store/user';
import List from './List';

function Add() {

  const [userId, setUserId] = useState(null);

  const [userList, setUserList] = useRecoilState(userListState);


  const addUser = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await res.json();
    setUserList([...userList, data]);
  }

  return (
    <View>
      <View style={styles.row}>
        <Text>추가 유저</Text>
        <TextInput style={styles.input} value={userId} onChangeText={setUserId} />
        <Button title='추가' onPress={addUser}/>
      </View>
      <List/>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 30,
    paddingHorizontal : 10,
    alignItems : 'center'
  },
  input: {
    width: 150,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Add;
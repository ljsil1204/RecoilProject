import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Item from './Item';
import { useRecoilState } from 'recoil';
import { userListState } from '../../store/user';

function List() {

  const [useList, _] = useRecoilState(userListState);

  return (
    <View>
      {useList.map( ({id, name, email}) => <Item key={id} name={name} email={email}/>)}
    </View>
  );
}

export default List;
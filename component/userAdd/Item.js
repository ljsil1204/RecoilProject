import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function Item({name, email}) {
  return (
    <View style={{marginVertical:10}}>
      <Text style={{fontSize:15, fontWeight:'bold', color:'black'}}>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
}

export default Item;
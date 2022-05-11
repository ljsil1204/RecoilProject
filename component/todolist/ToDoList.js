import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoIdState, selecteTodo } from './store/todo';


function ToDoList() {

  const [value, setValue] = useState(); // Picker value 값 저장
  const [todoId, setTodoId] = useRecoilState(todoIdState); // Pick  변경값에 따라, 인덱스값 저장
  const selected = useRecoilValue(selecteTodo(todoId)); // 아이디 값을 넣어줘서 선택된 할일목록 반환

  
  return (
    <View>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => {setValue(itemValue); setTodoId(itemIndex)}}
      >
        <Picker.Item label="할일1" value="선택1" />
        <Picker.Item label="할일2" value="선택2" />
        <Picker.Item label="할일3" value="선택3" />
      </Picker>

      <Text>선택 : {selected.title}</Text>
    </View>
  );
}

export default ToDoList;
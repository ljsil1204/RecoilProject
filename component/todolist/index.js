import React from 'react';
import {RecoilRoot} from 'recoil';
import ToDoList from './ToDoList';


function main() {
  return (
    <RecoilRoot>
      <ToDoList/>
    </RecoilRoot>
  );
}

export default main;

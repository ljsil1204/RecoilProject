import React from 'react';
import {RecoilRoot} from 'recoil';
import ControlNumber from './ControlNumber';
import DisplayNumber from './DisplayNumber';


function main() {
  return (
    <RecoilRoot>
      <ControlNumber/>
      <DisplayNumber/>
    </RecoilRoot>
  );
}

export default main;

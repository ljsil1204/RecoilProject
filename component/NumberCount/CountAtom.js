 import {atom, selector} from 'recoil';
 
 export const countAtom = atom({
   key : "countState",
   default : 0
 });
 
 export const countWithStringState = selector({
   key : 'countWithString',
   get : ({get}) => {
     const count  = get(countAtom);
     return count + "$";
   }
 })
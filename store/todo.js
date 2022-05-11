import { atom, selectorFamily} from "recoil";

// 할일목록 아이디 변경 감지할수 있게 아톰으로 정의
export const todoIdState = atom({
  key : 'todoId',
  default : 0,
});

// 할일목록 데이터 아톰으로 정의
export const todoState = atom({
  key : 'todolist',
  default : [
    {id : 0, title : '할일1'},
    {id : 1, title : '할일2'},
    {id : 2, title : '할일3'},
  ],
})

// selectorFamily 를 사용하여, 아이디 값에 따라 할일목록 데이터 반환하도록
export const selecteTodo = selectorFamily({
  key : 'selectTodo',
  get : 
  (id) =>
    ({get}) => {
      const todoList = get(todoState);
      return todoList[id];
    },
})
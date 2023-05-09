import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { todoListState, filteredTodoListState } from "./todoAtom";
import TodoItem from "./components/TodoItem";
import TodoListFilter from './components/TodoListFilter';
import TodoListStats from './components/TodoListStats';
import { currentUserNameQuery } from "./userAtoms";
import React from "react";



function App() {
	// const todoList = useRecoilValue(todoListState);
	const filteredTodoList = useRecoilValue(filteredTodoListState);
	// console.log("todoList", todoList)
	// console.log("filteredTodoList", filteredTodoList)
	return (
		<div className="App">
			<React.Suspense fallback={<div>...loading</div>}>
				<CurrentUserInfo />
			</React.Suspense>
			<TodoListStats />
			<TodoListFilter />
			<TodoItemCreator />
			{
				filteredTodoList.map((todoItem)=>(
					<TodoItem key={todoItem.id} item={todoItem} />
				))
			}
		</div>
	);
}

export default App;

function CurrentUserInfo(){
	const userName = useRecoilValue(currentUserNameQuery);
	return <div>{userName}</div>
}

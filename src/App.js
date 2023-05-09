import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { todoListState, filteredTodoListState } from "./todoAtom";
import TodoItem from "./components/TodoItem";
import TodoListFilter from './components/TodoListFilter';



function App() {
	const todoList = useRecoilValue(todoListState);
	const filteredTodoList = useRecoilValue(filteredTodoListState);
	console.log("todoList", todoList)
	console.log("filteredTodoList", filteredTodoList)
	return (
		<div className="App">
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

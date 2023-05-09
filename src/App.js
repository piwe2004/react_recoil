import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { todoListState } from "./todoAtom";
import TodoItem from "./components/TodoItem";



function App() {
	const todoList = useRecoilValue(todoListState);	
	return (
		<div className="App">
			<TodoItemCreator />
			{
				todoList.map((todoItem)=>(
					<TodoItem key={todoItem.id} item={todoItem} />
				))
			}
		</div>
	);
}

export default App;

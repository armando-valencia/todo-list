import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import AddTodo from "./components/AddTodo";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

function App() {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoitem = (e: React.FormEvent) => {
		e.preventDefault();

		// If there is a todo, add it to the end of the todos array
		if (todo) {
			setTodos([...todos, { id: uuid(), name: todo, isComplete: false }]);
			setTodo("");
			console.log(todos);
		}
	};

	return (
		<div className="max-w-screen min-h-screen flex flex-col items-center bg-slate-600">
			<h1 className="text-3xl md:text-4xl my-6 text-white z-1 text-center">
				Todo List
			</h1>
			<AddTodo todo={todo} setTodo={setTodo} addTodoItem={addTodoitem} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;

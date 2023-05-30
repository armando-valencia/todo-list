import { useState } from "react";
import { v4 as uuid } from "uuid";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./utils/model";
import { TodoItem } from "./components/TodoItem";

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
			<div className="flex flex-col justify-evenly w-1/2">
				{todos.map((todoItem) => (
					<TodoItem
						todoItem={todoItem}
						key={todoItem.id}
						todos={todos}
						setTodos={setTodos}
					/>
				))}
			</div>
		</div>
	);
}

export default App;

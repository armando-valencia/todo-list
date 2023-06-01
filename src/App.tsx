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
			// Use the callback version of setTodos to add the new todo and sort the todos alphabetically
			setTodos(() => {
				// Add the new todo to the end of the todos array
				const updatedTodos = [
					...todos,
					{ id: uuid(), name: todo, isComplete: false },
				];

				// Sort the todos alphabetically as new ones are added
				const sortedTodos = updatedTodos.sort((a, b) => {
					const fa = a.name.toLowerCase(),
						fb = b.name.toLowerCase();

					if (fa < fb) return -1;
					if (fa > fb) return 1;
					return 0;
				});

				// Return the sorted todos
				return sortedTodos;
			});

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

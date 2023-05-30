import { Todo } from "../model";
import TodoItem from "./TodoItem";

interface TodoListProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
	return (
		<div className="flex justify-evenly w-3/4 flex-wrap">
			{todos.map((todoItem) => (
				<TodoItem
					todoItem={todoItem}
					key={todoItem.id}
					todos={todos}
					setTodos={setTodos}
				/>
			))}
		</div>
	);
};
export default TodoList;

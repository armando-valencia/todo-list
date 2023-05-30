import { Todo } from "../model";
import { CheckmarkOutline } from "@carbon/icons-react";
import { Edit } from "@carbon/icons-react";
import { TrashCan } from "@carbon/icons-react";

interface TodoItemProps {
	todoItem: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todoItem, todos, setTodos }: TodoItemProps) => {
	const handleDone = (id: string) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id !== id) return todo;
				return {
					...todo,
					isComplete: !todo.isComplete,
				};
			})
		);
	};

	const handleDelete = (id: string) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div
			className={`flex rounded-md p-3 my-2 mx-1  text-neutral-200 justify-between w-full md:w-3/7 lg:w-2/5 space-x-1 ${
				todoItem.isComplete ? "bg-emerald-700" : "bg-blue-600"
			}`}
		>
			<h1
				className={`flex-1 p-1 border-none ${
					todoItem.isComplete ? "line-through" : ""
				}`}
			>
				{todoItem.name}
			</h1>
			<div className="flex px-3 items-center gap-3">
				<span className="cursor-pointer hover:scale-110 duration-200 hover:text-black">
					<Edit />
				</span>
				<span
					onClick={() => handleDelete(todoItem.id)}
					className="cursor-pointer hover:scale-110 duration-200 hover:text-black"
				>
					<TrashCan />
				</span>
				<span
					onClick={() => handleDone(todoItem.id)}
					className="cursor-pointer hover:scale-110 duration-200 hover:text-black"
				>
					<CheckmarkOutline />
				</span>
			</div>
		</div>
	);
};
export default TodoItem;

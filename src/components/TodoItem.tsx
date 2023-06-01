import { Todo } from "../utils/model";
import { CheckmarkOutline } from "@carbon/icons-react";
import { Edit } from "@carbon/icons-react";
import { TrashCan } from "@carbon/icons-react";
import { useEffect, useRef, useState } from "react";

interface TodoItemProps {
	todoItem: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoItem = ({ todoItem, todos, setTodos }: TodoItemProps) => {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [editText, setEditText] = useState<string>(todoItem.name);
	const inputRef = useRef<HTMLInputElement>(null);

	// Mark a todo item as done
	const handleComplete = (id: string) => {
		// Use the callback version of setTodos
		setTodos((prev) => {
			// Map over the todos array and toggle the isComplete property of the todo with the matching id
			const tempTodos = prev.map((todo) => {
				if (todo.id === id)
					return { ...todo, isComplete: !todo.isComplete };

				return todo;
			});

			const incompleteTodos: Todo[] = [];
			const completeTodos: Todo[] = [];

			// Split the todos into two arrays: completed and incomplete
			tempTodos.map((item) => {
				if (item.isComplete) {
					completeTodos.push(item);
				} else {
					incompleteTodos.push(item);
				}
			});

			// Sort the incomplete todos alphabetically
			const sortIncomplete = incompleteTodos.sort((a, b) => {
				const fa = a.name.toLowerCase(),
					fb = b.name.toLowerCase();

				if (fa < fb) return -1;
				if (fa > fb) return 1;
				return 0;
			});

			// Sort the completed todos alphabetically
			const sortCompleted = completeTodos.sort((a, b) => {
				const fa = a.name.toLowerCase(),
					fb = b.name.toLowerCase();

				if (fa < fb) return -1;
				if (fa > fb) return 1;
				return 0;
			});

			// Return all todos sorted alphabetically with the incomplete ones being first
			return sortIncomplete.concat(sortCompleted);
		});
	};

	// Delete a todo item
	const handleDelete = (id: string) => {
		// .filter() returns a new array with the elements that pass the return condition
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	// Edit the todo item text
	const handleEdit = (e: React.FormEvent, id: string) => {
		e.preventDefault();

		setTodos(
			todos.map((todoItem) =>
				todoItem.id === id ? { ...todoItem, name: editText } : todoItem
			)
		);

		setIsEditing(!isEditing);
	};

	// When editing an item, apply focus to the edit input
	useEffect(() => {
		inputRef.current?.focus();
	}, [isEditing]);

	return (
		<form
			onSubmit={(e) => handleEdit(e, todoItem.id)}
			className={`flex rounded-md p-3 my-1 text-neutral-200 justify-between w-full space-x-1 ${
				todoItem.isComplete ? "bg-emerald-700" : "bg-blue-600"
			}`}
		>
			{isEditing ? (
				<input
					ref={inputRef}
					className="flex-1 p-1 border-none w-2/3 text-black"
					value={editText}
					onChange={(e) => setEditText(e.target.value)}
				/>
			) : (
				<h1
					className={`flex-1 p-1 border-none ${
						todoItem.isComplete ? "line-through" : ""
					}`}
				>
					{todoItem.name}
				</h1>
			)}

			<div className="flex px-3 items-center gap-3">
				<span
					onClick={() => {
						setIsEditing(!isEditing);
					}}
					className={`cursor-pointer hover:scale-110 duration-200 hover:text-black ${
						isEditing ? "animate-pulse text-black font-bold" : ""
					}}`}
				>
					<Edit />
				</span>
				<span
					onClick={() => handleDelete(todoItem.id)}
					className="cursor-pointer hover:scale-110 duration-200 hover:text-red-700"
				>
					<TrashCan />
				</span>
				<span
					onClick={() => handleComplete(todoItem.id)}
					className="cursor-pointer hover:scale-110 duration-200 hover:text-emerald-500"
				>
					<CheckmarkOutline />
				</span>
			</div>
		</form>
	);
};

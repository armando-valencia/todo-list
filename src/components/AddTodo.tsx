interface AddTodoProps {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	addTodoItem: (e: React.FormEvent) => void;
}

const AddTodo = ({ todo, setTodo, addTodoItem }: AddTodoProps) => {
	return (
		<form
			className="flex w-1/2 my-2 relative justify-center items-center z-10"
			onSubmit={addTodoItem}
		>
			<input
				className="w-full rounded-md py-4 px-5 text-lg border-none duration-200 shadow-inner focus:shadow-2xl focus:outline-none focus:scale-[101%]"
				type="input"
				placeholder="Enter a task"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button
				className="absolute w-12 h-12 my-3 mx-1 rounded-md right-0 border-none text-lg bg-blue-600 hover:bg-blue-800 text-white duration-200 shadow-md hover:shadow-2xl hover:scale-105 active:scale-90 active:shadow-black"
				type="submit"
			>
				Go
			</button>
		</form>
	);
};
export default AddTodo;

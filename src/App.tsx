import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

function App() {
	const [todo, setTodo] = useState<string>("");

	return (
		<div className="w-screen h-screen flex flex-col items-center bg-blue-600">
			<h1 className="uppercase text-3xl md:text-4xl my-6 md:my-8 text-white z-1 text-center ">
				Todo List App
			</h1>
			<InputField todo={todo} setTodo={setTodo} />
		</div>
	);
}

export default App;

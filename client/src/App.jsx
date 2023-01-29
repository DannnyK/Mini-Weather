import "./App.css";
import { getData } from "./api";
import { useState } from "react";

function App() {
	const [name, setName] = useState();

	const greet = async () => {
		const data = await getData("about").then((result) => setName(result));
		return data;
	};

	return (
		<div className="main">
			<button
				onClick={() => {
					greet();
				}}
			>
				click to greet
			</button>
			<h1>Hello</h1>
			<p>{name ? name : "name"}</p>
		</div>
	);
}

export default App;

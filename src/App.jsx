import { useState } from "react";
import "./App.css";

function App() {
	const [counter, setCounter] = useState(0);
	const addNum = () => {
		setCounter(counter + 1);
	};

	const removeNum = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		} else {
			setCounter(0);
		}
	};

	return (
		<>
			<h2>Ashu singh</h2>
			<h2>Counter:{counter}</h2>
			<button onClick={addNum}>Add Value</button>
			<br />
			<button onClick={removeNum}>Remove value</button>
		</>
	);
}

export default App;

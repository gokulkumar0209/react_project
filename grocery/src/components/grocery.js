import React from "react";
import { useState } from "react";

function Grocery() {
	const [gros, setGros] = useState([]);
	return (
		<>
			<div>grocery</div>
			<input type="textbox"></input>
			<button>ADD</button>
		</>
	);
}

export default Grocery;

import React from "react";
import { useState } from "react";

const [gros, setGros] = useState([]);
function grocery() {
	return (
		<>
			<div>grocery</div>
			<input type="textbox"></input>
			<button>ADD</button>
		</>
	);
}

export default grocery;

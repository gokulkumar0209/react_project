import React, { useState } from "react";

function Grocery() {
	const [groceries, setGroceries] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleAddClick = () => {
		if (inputValue.trim() !== "") {
			setGroceries([...groceries, inputValue]);
			setInputValue("");
		}
	};

	const handleDeleteClick = (index) => {
		const updatedGroceries = [...groceries];
		updatedGroceries.splice(index, 1);
		setGroceries(updatedGroceries);
	};

	return (
		<>
			<div>My Grocery List</div>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Enter grocery item"
			/>
			<button onClick={handleAddClick}>ADD</button>
			<ul>
				{groceries.map((item, index) => (
					<li key={index}>
						{item}
						<button onClick={() => handleDeleteClick(index)}>Delete</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default Grocery;

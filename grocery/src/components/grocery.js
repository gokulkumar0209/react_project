import React, { useState } from "react";

function Grocery() {
	const [groceries, setGroceries] = useState({});
	const [inputValue, setInputValue] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [error, setError] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		setError("");
	};
	const handleQuantity = (e) => {
		setQuantity(e.target.value);
	};
	const handleAddClick = () => {
		const trimmedValue = inputValue.trim();

		if (trimmedValue !== "") {
			if (!groceries[trimmedValue]) {
				setGroceries({
					...groceries,
					[trimmedValue]: { name: trimmedValue, quantity: quantity },
				});
				setInputValue("");
			} else {
				setError("Item already exists");
			}
		} else {
			setError("Please enter a valid item");
		}
		setQuantity(0);
	};

	const handleDeleteClick = (name) => {
		const updatedGroceries = { ...groceries };
		delete updatedGroceries[name];
		setGroceries(updatedGroceries);
	};

	return (
		<>
			<div>
				<div className="flex justify-center">
					<input
						className=" bg-slate-300 border-zinc-600 mr-2 mb-2 rounded-md"
						type="text"
						value={inputValue}
						onChange={handleInputChange}
						placeholder="Enter grocery item"
					/>

					<input
						className=" bg-slate-300 border-zinc-600  w-9 mr-2 mb-2 rounded-md p-1"
						type="number"
						value={quantity}
						onChange={handleQuantity}
					/>

					<button onClick={handleAddClick}>ADD</button>
				</div>
				<div className="flex justify-center">
					{error && <p>{error}</p>}
					<ul>
						{Object.keys(groceries).map((name) => (
							<li className=" mb-2" key={name}>
								{groceries[name].name}
								<button
									className=" ml-4"
									onClick={() => handleDeleteClick(name)}
								>
									Delete
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Grocery;

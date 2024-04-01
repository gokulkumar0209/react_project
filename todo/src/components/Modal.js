import React from "react";

function Modal({hideModal}) {
	return (
		<div className="flex h-full space-x-1 justify-center items-center">
			<p>Do you want to delete the task?</p>
			<button
				className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
				onClick={hideModal}
			>
				No
			</button>
			<button
				className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
				onClick={hideModal}
			>
				Yes
			</button>
		</div>
	);
}

export default Modal;

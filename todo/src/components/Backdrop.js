import React from "react";

function Backdrop({ children }) {
	return (
		<div className=" fixed top-0 left-0 w-full h-full bg-opacity-50 backdrop-blur-lg z-10">
			{children}
		</div>
	);
}

export default Backdrop;

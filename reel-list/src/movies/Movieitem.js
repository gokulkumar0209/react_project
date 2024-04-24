import React from "react";

function Movieitem( {title, image, description}) {
	return (
		<li>
			<div>
				<h2>{title}</h2>
				<img src={image}></img>
				<p>{description}</p>
			</div>
		</li>
	);
}

export default Movieitem;
import React from "react";
import Movieitem from "./Movieitem";

function Movielist({ reels }) {
	return (
		<div>
			{reels.map((movie) => (
				<Movieitem
					key={movie.id}
					title={movie.title}
					image={movie.image}
					description={movie.description}
				/>
			))}
		</div>
	);
}

export default Movielist;

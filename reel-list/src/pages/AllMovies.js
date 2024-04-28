import React from "react";
import Movielist from "../components/movies/Movielist";
function AllMoviesPage({reels}) {
	return (
		<div>
			<p>Hi</p>
			<Movielist reels={reels}></Movielist>
		</div>
	);
}

export default AllMoviesPage;

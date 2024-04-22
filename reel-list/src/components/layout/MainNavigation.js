import React from "react";
import { Link } from "react-router-dom";
function MainNavigation() {
	return (
		<header>
			<div>
				<nav >
					<ul className="flex justify-center gap-3">
						<li>
							<Link to="/" All Movies>All Movies</Link>
						</li>
						<li>
							<Link to="/new-movies" New Meetups>New Movies</Link>
						</li>
						<li>
							<Link to="/favorites" Favorites>Favorites</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default MainNavigation;

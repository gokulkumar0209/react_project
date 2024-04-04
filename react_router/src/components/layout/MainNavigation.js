import React from "react";
import { Link } from "react-router-dom";
function MainNavigation() {
	return (
		<header className="bg-green-200 py-4">
			<div className="container mx-auto flex justify-center items-center">
				<nav>
					<ul className="flex space-x-4 justify-center">
						<li>
							<Link to="/">All Meetups</Link>
						</li>
						<li>
							<Link to="/new-meetups">New Meetup</Link>
						</li>
						<li>
							<Link to="/favorites">Favorites</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default MainNavigation;

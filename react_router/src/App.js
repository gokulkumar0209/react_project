import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";

function App() {
	return (
		<>
			<div className=" bg-gray-500 flex justify-center">
				<Routes>
					<Route path="/">
						<AllMeetupsPage></AllMeetupsPage>
					</Route>
					<Route path="/new-meetups">
						<NewMeetupsPage></NewMeetupsPage>
					</Route>
					<Route path="/favorites">
						<FavoritesPage></FavoritesPage>
					</Route>
				</Routes>
			</div>
		</>
	);
}

export default App;

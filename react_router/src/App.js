import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
	return (
		<>
			<div className=" bg-gray-500">
				<MainNavigation></MainNavigation>
				<div className="container mx-auto">
					<Routes>
						<Route path="/" element={<AllMeetupsPage />}></Route>
						<Route path="/new-meetups" element={<NewMeetupsPage />}></Route>
						<Route path="/favorites" element={<FavoritesPage />}></Route>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;

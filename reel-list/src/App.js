import { Routes, Route } from "react-router-dom";
import AllMovies from "./pages/AllMovies";
import Favorites from "./pages/Favorites";
import NewMovies from "./pages/NewMovies";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
	return (
		<>
			<div>
				<MainNavigation ></MainNavigation>
				<div className="container">
					<Routes>
						<Route path="/" element={<AllMovies />}></Route>
						<Route path="/new-movies" element={<NewMovies />}></Route>
						<Route path="/favorites" element={<Favorites />}></Route>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;

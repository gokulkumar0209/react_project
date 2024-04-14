import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
function FavoritesPage() {
	const FavoritesCtx = useContext(FavoritesContext);
	if (FavoritesCtx.totalFavorites === 0) {
		return <>No Favorites</>;
	}
	return (
		<section className=" bg-neutral-300 h-screen flex justify-center">
			<h1>My Favorites</h1>
			<MeetupList meetups={FavoritesCtx.favorites}></MeetupList>
		</section>
	);
}

export default FavoritesPage;

import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";
import MainNavigation from "./components/layout/MainNavigation";
import { useState } from "react";
const dummyObjects = [
	{
		id: 1,
		title: "The Perks of Being a Wallflower",
		image:
			"https://m.media-amazon.com/images/M/MV5BZThjMmQ5YjktMTUyMC00MjljLWJmMTAtOWIzNDIzY2VhNzQ0XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_.jpg",
		address: "Enchanted Lane, Amourville",
		description:
			"Embark on a journey with Charlie, a socially awkward teenager, as he navigates high school life, forms bonds with misfit seniors, and discovers the true essence of love and personal identity in this heartwarming coming-of-age tale.",
	},
	{
		id: 2,
		title: "96",
		image:
			"https://m.media-amazon.com/images/M/MV5BYzY0OTVhZTMtYjAzNy00ODYzLTkxMzUtZmY2MWRlNTE1N2UyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
		address: "Melody Street, Love Haven",
		description:
			"Take a nostalgic trip down memory lane with Ram and Janu, as they reunite after 22 years to rediscover the magic of their past love amidst the picturesque landscapes and soulful melodies of Harmony City.",
	},
	{
		id: 3,
		title: "Flipped",
		image:
			"https://m.media-amazon.com/images/M/MV5BMmFiNzM4NjgtYmFiYi00Mzk5LTgwYzAtZDIwMTQwZmQwODFkXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
		address: "Whimsical Way, Romance Point",
		description:
			"Experience the charming tale of Juli and Bryce, whose perceptions of each other flip like a coin as they journey through childhood, adolescence, and the blossoming of first love in the idyllic surroundings of Romance Hills.",
	},
	{
		id: 4,
		title: "Silver Linings Playbook",
		image:
			"https://upload.wikimedia.org/wikipedia/en/9/9a/Silver_Linings_Playbook_Poster.jpg",
		address: "Serendipity Street, Dreamland",
		description:
			"Join Pat and Tiffany on their unexpected journey filled with love, laughter, and a dance towards the silver linings in life, as they find solace and redemption amidst the unpredictable twists and turns of Hope Town.",
	},
	{
		id: 5,
		title: "Blue Valentine",
		image:
			"https://m.media-amazon.com/images/M/MV5BZWQwMzAxNmEtZDA0MS00ZTYyLWFlZDItMDRlMzMyMGE5OGU0XkEyXkFqcGdeQXVyMDAwMDAwNA@@._V1_.jpg",
		address: "Serenade Lane, Heartstrings Ville",
		description:
			"Delve into the bittersweet tale of Dean and Cindy, whose love story unfolds like a melancholic melody, echoing the raw emotions and tender moments shared amidst the backdrop of Loveville's picturesque streets and nostalgic melodies.",
	},
	{
		id: 6,
		title: "Before Sunrise",
		image:
			"https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
		address: "Romantic Walk, Whispers Corner",
		description:
			"Embark on a romantic journey through the moonlit streets of Dreamy Town, where Jesse and Céline's passionate encounter unfolds, weaving a tale of love, longing, and serendipitous moments that transcend the boundaries of time and space.",
	},
	{
		id: 7,
		title: "The Fault in Our Stars",
		image:
			"https://upload.wikimedia.org/wikipedia/en/4/41/The_Fault_in_Our_Stars_%28Official_Film_Poster%29.png",
		address: "Love Lane, Serenity Heights",
		description:
			"Experience the poignant love story of Hazel and Augustus amidst the tranquil surroundings of Love City, where every moment is a testament to the beauty of life, love, and the eternal bond that transcends the limitations of time and space.",
	},
	{
		id: 8,
		title: "La La Land",
		image:
			"https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
		address: "Starry Lane, Melody Meadows",
		description:
			"Indulge in the whimsical romance of Sebastian and Mia as they dance through the starlit streets of Stardust Town, where dreams take flight and love blossoms amidst the enchanting melodies of the city of angels.",
	},
	{
		id: 9,
		title: "Titanic",
		image:
			"https://m.media-amazon.com/images/M/MV5BOTdlZGJiNDUtODUyMi00ODQyLTgwNDEtNmI5MzZlZmZlOWQ5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
		address: "Oceanic Avenue, Eternal Harbor",
		description:
			"Embark on an epic journey aboard the RMS Titanic amidst the azure waters of Atlantis, where the timeless love story of Jack and Rose unfolds amidst the opulent grandeur and tragic fate of the unsinkable ship.",
	},
	{
		id: 10,
		title: "Revolutionary Road",
		image:
			"https://m.media-amazon.com/images/M/MV5BNmJlYzlmMDktMTVmMi00M2IzLTkyMDktZmQ0NzEwNTQzZTljXkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg",
		address: "Freedom Lane, Liberty Town",
		description:
			"Explore the revolutionary tale of Frank and April as they challenge societal norms and redefine love amidst the quaint suburbs of Conformity Town, where every rebellion is a testament to the enduring spirit of passion and freedom.",
	},
];


let storedData;
let storedDataJSON;
const dummy=JSON.stringify(dummyObjects)
if(!localStorage.getItem('dummyData')){
localStorage.setItem('dummyData',dummy)
}
 storedDataJSON=localStorage.getItem('dummyData')
 storedData=JSON.parse(storedDataJSON)

function App() {
	let [data,setData]  =useState(storedData)
	console.log(data)
	return (
		<>
			<div className=" bg-gray-500">
				<MainNavigation></MainNavigation>
				<div className="container mx-auto">
					<Routes>
						<Route path="/" element={<AllMeetupsPage  data={data} />}></Route>
						<Route path="/new-meetups" element={<NewMeetupsPage setData={setData}/>}></Route>
						<Route path="/favorites" element={<FavoritesPage />}></Route>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;

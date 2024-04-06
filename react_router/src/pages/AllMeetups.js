import React from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage({data}) {
   

	return (
		<>
			<h1>All Meetups Page</h1>
			<MeetupList  meetups={data} />
		</>
	);
}

export default AllMeetupsPage;

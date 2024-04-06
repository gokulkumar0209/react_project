import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage({setData}) {
	function addMeetupHandler(meetupData) {
		const storedDataJSON = localStorage.getItem("dummyData");

		const storedData = JSON.parse(storedDataJSON);
		meetupData["id"] = Math.floor(Math.random() * (1000 - 100) + 100);
		storedData.push(meetupData);
		setData(storedData)

		const updatedDataJSON = JSON.stringify(storedData);

		// Store the updated JSON string back into localStorage
		localStorage.setItem("dummyData", updatedDataJSON);
	}
	return (
		<>
			<div className=" bg-neutral-300 h-screen flex justify-center">
				<NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
			</div>
		</>
	);
}

export default NewMeetupsPage;

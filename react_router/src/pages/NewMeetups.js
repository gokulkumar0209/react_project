import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
	return (
		<>
			<div className=" bg-neutral-300 h-screen flex justify-center">
				<NewMeetupForm></NewMeetupForm>
			</div>
		</>
	);
}

export default NewMeetupsPage;

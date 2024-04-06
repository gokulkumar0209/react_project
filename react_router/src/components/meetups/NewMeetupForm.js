import React from "react";
import { useRef } from "react";
function NewMeetupForm({onAddMeetup}) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function sumbitHandler(event) {
		event.preventDefault();
		const enteredTitle = titleInputRef.current.value;
		const eneredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;
		const meetupData = {
			title: enteredTitle,
			image: eneredImage,
			address: enteredAddress,
			description: enteredDescription,
		};
    onAddMeetup(meetupData);
	}
	return (
		<div className="flex justify-center">
			<div className="w-96">
				<h1 className="mb-2 font-serif font-bold text-xl flex justify-center">
					Add Meetup
				</h1>

				<form onSubmit={sumbitHandler}>
					<div className="bg-gray-400 p-4 rounded-md">
						<div className="mb-2">
							<label htmlFor="title">Meetup Title</label>
							<input
								type="text"
								required
								id="title"
								className="w-full border rounded-md px-4 py-2"
								ref={titleInputRef}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="image">Meetup Image</label>
							<input
								type="url"
								required
								id="image"
								className="w-full border rounded-md px-4 py-2"
								ref={imageInputRef}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="address">Address</label>
							<input
								type="text"
								required
								id="address"
								className="w-full border rounded-md px-4 py-2"
								ref={addressInputRef}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="description">Description</label>
							<textarea
								required
								rows="5"
								className="w-full border rounded-md px-4 py-2"
								ref={descriptionInputRef}
							></textarea>
						</div>
						<div className="flex justify-end">
							<button
								type="submit"
								className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
							>
								Add Meetup
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default NewMeetupForm;

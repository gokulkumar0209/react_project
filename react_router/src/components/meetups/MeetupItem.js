import React from "react";

function MeetupItem({title,address,description,image}) {
	return (
		<li className="  mb-2" >
			<div className="grid grid-cols-12">
				<div className=" w-32 col-span-2">
					<img src={image} alt={title}></img>
				</div>
				<div className="col-span-10">
					<div>
						<h2 className="mb-2 font-bold">{title}</h2>
						<address className="mb-2">{address}</address>
						<p className="mb-2">{description}</p>
					</div>
					<div>
						<button className=" bg-slate-200 p-2">Favorite</button>
					</div>
				</div>
			</div>
		</li>
	);
}

export default MeetupItem;

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




// import React, { useState } from "react";

// function MeetupItem({ title, address, description, image }) {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="w-full md:w-1/2 lg:w-1/4 mb-4 px-2">
//       <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//         <div>
//           <img
//             className="w-full h-48 object-cover"
//             src={image}
//             alt={title}
//           />
//         </div>
//         <div className="p-4">
//           <h2 className="text-lg font-semibold mb-2">{title}</h2>
//           <address className="text-gray-600 mb-2">{address}</address>
//           <p className={`text-gray-600 ${expanded ? "block" : "hidden"}`}>
//             {description}
//           </p>
//           <button
//             onClick={toggleExpand}
//             className="mt-2 bg-indigo-500 text-white py-2 px-4 rounded"
//           >
//             {expanded ? "Read Less" : "Read More"}
//           </button>
//           <button className="bg-slate-200 p-2 float-right">Favorite</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MeetupItem;
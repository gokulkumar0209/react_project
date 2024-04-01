import React from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";
function Tasks(props) {
	const [showModal, setShowModal] = useState(false);
	function confirmation() {
		setShowModal(true);
	}
	function hideModal() {
		setShowModal(false);
	}
	return (
		<div>
			<div className="text-xl ">
				<div className=" bg-green-200 p-8">
					<h2 className=" font-extrabold">{props.text}</h2>
					<button
						className=" bg-cyan-200 font-semibold text-cyan-600"
						onClick={confirmation}
					>
						Delete
					</button>
				</div>
				{showModal ? (
					<>
						<Backdrop >
							<Modal hideModal={hideModal}></Modal>
						</Backdrop>
					</>
				) : null}
			</div>
		</div>
	);
}

export default Tasks;

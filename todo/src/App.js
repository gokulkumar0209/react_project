// import 'tailwindcss/tailwind.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	return (
		<>
			<div>
				<Header></Header>
				<div className="grid grid-cols-2 gap-2 sm:grid-cols-4 ">
					<Tasks text="Task first"></Tasks>
					<Tasks text="Task x"></Tasks>
					<Tasks text="Task y"></Tasks>
					<Tasks text="Task z"></Tasks>
					<Tasks text="Task m"></Tasks>
					<Tasks text="Task n"></Tasks>
					<Tasks text="Task r"></Tasks>
				</div>
			</div>
		</>
	);
}

export default App;

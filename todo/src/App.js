// import 'tailwindcss/tailwind.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	return (
		<>
			<div>
				<Header></Header>
				<div className="grid grid-cols-2 gap-2 sm:grid-cols-4 ">
					<Tasks></Tasks>
          <Tasks></Tasks>
          <Tasks></Tasks>
          <Tasks></Tasks>
          <Tasks></Tasks>
          <Tasks></Tasks>
          <Tasks></Tasks>
				</div>
			</div>
		</>
	);
}

export default App;

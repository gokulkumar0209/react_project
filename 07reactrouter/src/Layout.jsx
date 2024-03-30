import React from "react";
import { Outlet } from "react-router-dom";
import header from "./components/header/header";
import footer from "./components/footer/footer";
function Layout() {
	return (
		<>
			<header></header>
			<Outlet></Outlet>
			<footer></footer>
		</>
	);
}

export default Layout;

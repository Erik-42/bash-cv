import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./src/pages/home/home.jsx";
import Error404 from "./src/pages/error404/error404.jsx";
import Footer from "./src/layout/footer/footer.jsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<Router>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</main>
			<Footer />
			<Analytics />
		</Router>
	);
}

export default App;

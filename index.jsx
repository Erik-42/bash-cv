import React from "react";
import { createRoot } from "react-dom/client"; 
import App from "./App.jsx"; 
import "./src/css/__index.scss"; 
import "./src/css/fontawesome.js"; 

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

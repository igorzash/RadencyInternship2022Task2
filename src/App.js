import React from "react";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { Container } from "./components/Container";
import { Spacing } from "./components/Spacing";

function App() {
	return (
		<Container>
			<MainPage />

			<Spacing y={60} />
		</Container>
	);
}

export default App;

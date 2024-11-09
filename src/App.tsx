import { Routes } from "./routes/Routes";
import "./App.css";
import AnimatedRoutes from "./routes/AnimatedRoutes";

export function App() {
	return (
		<div id="app">
			<AnimatedRoutes />
			<Routes />
		</div>
	);
}

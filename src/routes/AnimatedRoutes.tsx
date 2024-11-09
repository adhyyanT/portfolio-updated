import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadAnimation from "../components/animation/LoadAnimation";
import Home from "../pages/Home/Home";

export default function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location}>
				<Route
					path="/*"
					element={
						<LoadAnimation>
							<Home />
						</LoadAnimation>
					}
				/>
			</Routes>
		</AnimatePresence>
	);
}

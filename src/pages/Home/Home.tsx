import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<Navbar />
			<h1>Home</h1>
		</div>
	);
}

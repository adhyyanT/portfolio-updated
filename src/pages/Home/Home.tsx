import Experience from "../../components/Experience/Experience";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<div style={{ overflow: "auto", backgroundColor: "var(--background)" }}>
			<div className={styles.page}>
				<Navbar />
				<Hero />
			</div>
			<div className={styles.contentContainer}>
				<Experience />
			</div>
		</div>
	);
}

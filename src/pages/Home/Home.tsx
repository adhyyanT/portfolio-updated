import Experience from "../../components/Experience/Experience";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Skills from "../../components/Skills/Skills";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<div style={{ overflow: "auto", backgroundColor: "var(--background)" }}>
			<div className={styles.page}>
				<Navbar />
				<Hero />
			</div>
			<div className={styles.bodyContainer}>
				<div className={styles.contentContainer}>
					<Experience />
				</div>
				<div className={styles.contentContainer}>
					<Skills />
				</div>
				<footer style={{ maxWidth: "1024px" }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quis.
					Maiores quos dolore quam, est quisquam neque. Repellat est pariatur,
					iusto tempore nihil illo natus commodi eos accusantium libero
					reprehenderit?
				</footer>
			</div>
		</div>
	);
}

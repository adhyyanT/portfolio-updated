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
			<div>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
				reprehenderit exercitationem eligendi vitae velit at modi, iusto iure
				error cupiditate eveniet voluptas accusamus tempore dignissimos
				necessitatibus asperiores id voluptatum. Natus?
			</div>
		</div>
	);
}

import classNames from "classnames";
import ContactForm from "../../components/ContactForm/ContactForm";
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
				<section className={styles.contentContainer}>
					<Skills />
				</section>
				<section className={styles.contentContainer}>
					<Experience />
				</section>
				<section className={styles.contentContainer}>
					<ContactForm/>
				</section>
				<footer className={classNames(styles.contentContainer,styles.footerContainer)}>
					<p>Made with <span style={{color:"var(--blue)"}}>❤</span> by Adhyyan from <span style={{color:"var(--blue)", fontWeight:'bold'}}>India </span></p>
				</footer>
			</div>
		</div>
	);
}

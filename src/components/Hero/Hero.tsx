import classNames from "classnames";
import styles from "./Hero.module.css";
import Button from "../ui/Button/Button";
import { FileDown } from "lucide-react";

export default function Hero() {
	const handleResumeDownload = () =>{
		const pdfUrl = import.meta.env.VITE_RESUME;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Adhyyan_Tripathi.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
	}
	return (
		<div className={styles.box}>
			<div className={styles.titleContainer}>
				<p className={styles.mediumFont}>Hi there! 👋</p>
				<p className={styles.strongFont}>I'm Adhyyan Tripathi</p>
				<p className={styles.strongFont}>
					a{" "}
					<span className={classNames(styles.highlight, styles.strongFont)}>
						Software Engineer
					</span>
				</p>
				<pre>With 2+ years of experience.</pre>
				<div className={styles.buttonContainer}>
					<Button onClick={handleResumeDownload} className={styles.btn} variant="filled">
						Download CV <FileDown size={"1.1rem"} />
					</Button>
				</div>
			</div>
		</div>
	);
}

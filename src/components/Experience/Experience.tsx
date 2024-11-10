import { BriefcaseBusiness } from "lucide-react";
import styles from "./Experience.module.css";

export default function Experience() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>Experience</h1>
			</div>
			<div className={styles.expContainer}>
				<div className={styles.timeLine}>
					<div className={styles.dateContainer}>
						<div className={styles.dateArrow}></div>
						<p>10/23</p>
					</div>
				</div>
				<div className={styles.textBox}>
					<div className={styles.textContainer}>
						<div className={styles.expHeader}>
							<div className={styles.icon}>
								<BriefcaseBusiness size={30} />
							</div>
							<h1>V2Solutions,</h1>
							<h2>Software Engineer</h2>
						</div>
						<div className={styles.expContent}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
							libero similique aliquam, quae culpa odio animi voluptas ab ipsum
							recusandae corporis architecto dolores tempora modi placeat
							accusamus adipisci rerum quasi. Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Illum maiores quibusdam eligendi
							impedit maxime illo deserunt architecto minima fugit. Facere
							quisquam similique recusandae provident aliquid aliquam, hic sequi
							at deleniti!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

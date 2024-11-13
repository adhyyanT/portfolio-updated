import { useMemo, useRef } from "react";
import { data } from "../../data/jobDesription";
import Timeline from "../Timeline/Timeline";
import styles from "./Experience.module.css";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Header from "../Header/Header";

export default function Experience() {
	const ref = useRef(null);
	const experience = useMemo(() => data, []);
	const scroll = useScroll();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});
	useMotionValueEvent(scroll.scrollY, "change", (latest) => {
		console.log("Page scroll: ", latest);
	});
	return (
		<div className={styles.container} ref={ref}>
			<Header title="Experience" />
			<div ref={ref} className={styles.expContainer}>
				{experience.map((jd, key) => (
					<Timeline {...jd} scrollYProgress={scrollYProgress} key={key} />
				))}
			</div>
		</div>
	);
}

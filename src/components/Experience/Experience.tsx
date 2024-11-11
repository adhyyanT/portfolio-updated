import { useMemo, useRef } from "react";
import { data } from "../../data/jobDesription";
import Timeline from "../Timeline/Timeline";
import styles from "./Experience.module.css";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function Experience() {
	const ref = useRef(null);
	const experience = useMemo(()=> data,[]);
	const scroll = useScroll();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"]
	});
  useMotionValueEvent(scroll.scrollY, "change", (latest) => {
	console.log("Page scroll: ", latest)
  })
	return (
		<div className={styles.container} ref={ref}>
			<div className={styles.header}>
				<h1 className={styles.title}>Experience</h1>
			</div>
			<div ref={ref} className={styles.expContainer}>
				{
					experience.map((jd,key)=>(<Timeline {...jd} scrollYProgress={scrollYProgress}  key={key}/>))
				}
			</div>
		</div>
	);
}

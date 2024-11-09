import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./LoadAnimation.module.css";

export default function LoadAnimation({ children }: { children: ReactNode }) {
	return (
		<>
			<motion.div className={styles.box}>
				<motion.div
					className={styles.innerBox}
					animate={{ scale: [1, 0.9, 1] }}
					transition={{ duration: 3, ease: "circInOut" }}
				>
					<motion.h1
						className={styles.heading}
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{ duration: 2, ease: "backInOut" }}
					>
						Hello
					</motion.h1>
				</motion.div>
			</motion.div>
			{children}
		</>
	);
}

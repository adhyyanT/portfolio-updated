import classNames from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";
import styles from "./Button.module.css";

type ButtonVariant = "outline" | "filled";

type ButtonProps = HTMLMotionProps<"button"> & {
	variant?: ButtonVariant;
};

export default function Button(props: ButtonProps) {
	return (
		<motion.button
			className={classNames(
				styles.button,
				props.variant ?? styles.buttonOutline,
				props.variant === "outline" && styles.buttonOutline,
				props.variant === "filled" && styles.buttonFilled
			)}
			{...props}
		>
			{props.children}
		</motion.button>
	);
}

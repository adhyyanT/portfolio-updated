import styles from "./Header.module.css";

export default function Header({ title }: { title: string }) {
	return (
		<div className={styles.header}>
			<h1 className={styles.title}>{title}</h1>
		</div>
	);
}

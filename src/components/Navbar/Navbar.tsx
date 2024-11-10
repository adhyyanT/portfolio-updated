import { BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";
import Github from "../../assets/Github.svg";
import Leetcode from "../../assets/Leetcode.svg";
import Linkedin from "../../assets/Linkedin.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
	const items = [
		{
			pos: 1,
			name: "Github",
			img: Github,
			ref: "https://github.com/adhyyanT",
		},
		{
			pos: 2,
			name: "Linkedin",
			img: Linkedin,
			ref: "https://www.linkedin.com/in/adhyyan-tripathi",
		},
		{
			pos: 3,
			name: "Leetcode",
			img: Leetcode,
			ref: "https://leetcode.com/u/Droid232/",
		},
	];
	return (
		<nav className={styles.navContainer}>
			<BriefcaseBusiness size={32} />
			<div className={styles.linkContainer}>
				{items.map((item) => (
					<Link key={item.pos} to={item.ref} target="_blank">
						<img height={32} src={item.img} alt={item.name} />
					</Link>
				))}
			</div>
		</nav>
	);
}

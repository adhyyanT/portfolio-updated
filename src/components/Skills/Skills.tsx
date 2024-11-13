import Header from "../Header/Header";
import styles from "./Skills.module.css";
import java from "../../assets/skills/java.png";
import azure from "../../assets/skills/azure.png";
import { useState, useEffect } from "react";
import classNames from "classnames";

const images = [
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/angular.svg",
		text: "Angular",
	}
	,
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg",
		text: "Express",
	},
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg",
		text: "Node.JS",
	},
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/reactivex.svg",
		text: "RxJS",
	},
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mysql.svg",
		text: "MySQL",
	},
	
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg",
		text: "Typescript",
	}
	,
	
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg",
		text: "React",
	}
	,
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazonwebservices.svg",
		text: "AWS",
	},
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/dotnet.svg",
		text: "Dotnet",
	}
	,
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/git.svg",
		text: "Git",
	},
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/docker.svg",
		text: "Docker",
	},
	{
		src: java,
		text: "Java",
	}
	,
	{
		src: azure,
		text: "Azure",
	},
	{
		src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vuedotjs.svg",
		text: "Vue",
	},
];

export default function Skills() {
	const [animatedIndex, setAnimatedIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setAnimatedIndex(randomIndex);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);
	return (
		<div className={styles.box}>
			<Header title="Skills" />
			<div className={styles.gridContainer}>
				{images.map((image, index) => {
					return (
						<article key={index} className={classNames(styles.item,index === animatedIndex ? styles.animated: '')}>
							<div className={styles.imgContainer}>
								<img src={image.src} alt={image.text} className={styles.img} />
								<p>{image.text}</p>
							</div>
						</article>
					);
				})}
			</div>
		</div>
	);
}

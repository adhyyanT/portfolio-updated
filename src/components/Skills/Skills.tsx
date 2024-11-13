import Header from "../Header/Header";
import styles from "./Skills.module.css";
import angular from "../../assets/skills/angular_black.png";
import docker from "../../assets/skills/docker-logo-blue.png";
import dotnet from "../../assets/skills/dotnet-logo.png";
import express from "../../assets/skills/expressjs-ar21.svg";
import github from "../../assets/skills/GitHub_Logo.png";
import java from "../../assets/skills/java.png";
import mysql from "../../assets/skills/logo-mysql-170x115.png";
import nodejs from "../../assets/skills/nodejsDark.svg";
import react from "../../assets/skills/react.svg";
import rxjs from "../../assets/skills/RxJs_Logo_Basic.svg";
import ts from "../../assets/skills/ts-logo-512.png";
import vue from "../../assets/skills/Vue_idrkKugrkm_0.png";

// const images = [
// 	{
// 		src: ts,
// 		text: "Typescript",
// 	},
// 	{
// 		src: express,
// 		text: "Express",
// 	},
// 	{
// 		src: nodejs,
// 		text: "Node.JS",
// 	},
// 	{
// 		src: rxjs,
// 		text: "RxJS",
// 	},
// 	{
// 		src: mysql,
// 		text: "MySQL",
// 	},
// 	{
// 		src: react,
// 		text: "React",
// 	},
// 	{
// 		src: angular,
// 		text: "Angular",
// 	},
// 	{
// 		src: vue,
// 		text: "Vue",
// 	},
// 	{
// 		src: java,
// 		text: "Java",
// 	},
// 	{
// 		src: github,
// 		text: "Github",
// 	},
// 	{
// 		src: docker,
// 		text: "Docker",
// 	},
// 	{
// 		src: dotnet,
// 		text: "Dotnet",
// 	},
// 	{
// 		src: vue,
// 		text: "Vue",
// 	},
// 	{
// 		src: vue,
// 		text: "Vue",
// 	},
// ];

export default function Skills() {
	// console.log(images.length);
	return (
		<div>
			<Header title="Skills" />
			<div className={styles.gridContainer}>
				{/* {images.map((image, index) => {
					return (
						<article key={index} className={styles.item}>
							<div className={styles.imgContainer}>
								<img className={styles.img} src={image.src} alt={image.text} />
								<p>{image.text}</p>
							</div>
						</article>
					);
				})} */}
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				<article className={styles.item}>
					{/* <div className={styles.imgContainer}>
						<img className={styles.img} src={angular} alt="Angular" />
						<p>Angular</p>
					</div> */}
				</article>
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				<article className={styles.item}></article>
				{/* <article className={styles.item}></article> */}
			</div>
		</div>
	);
}

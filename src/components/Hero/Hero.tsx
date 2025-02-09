import classNames from "classnames";
import styles from "./Hero.module.css";
import Button from "../ui/Button/Button";
import { FileDown } from "lucide-react";
import { RotateWords } from "../ui/RotateWord/RotateWord";

// https://drive.google.com/uc?export=download&id=FILEID replace fileId with the pdf id from gdrive
export default function Hero() {
  const handleResumeDownload = () => {
    const pdfUrl = import.meta.env.VITE_RESUME;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Adhyyan_Tripathi.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={styles.box}>
      <div className={styles.titleContainer}>
        <p className={styles.mediumFont}>Hi there! 👋</p>
        <p className={styles.strongFont}>I'm Adhyyan Tripathi</p>
        <div className={classNames(styles.strongFont)}>
          a{" "}
          <span className={classNames(styles.highlight, styles.strongFont)}>
            <RotateWords
              text=""
              words={["Software Engineer", "Fullstack Engineer"]}
            />
          </span>
        </div>
        <pre>With 2+ years of experience.</pre>
        <div className={styles.buttonContainer}>
          <Button
            onClick={handleResumeDownload}
            className={styles.btn}
            variant="filled"
          >
            Download CV <FileDown size={"1.1rem"} />
          </Button>
        </div>
      </div>
    </div>
  );
}

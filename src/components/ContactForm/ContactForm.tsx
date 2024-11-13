import { Send } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import Header from "../Header/Header";
import Button from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [submitText, setSubmitText] = useState("");

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const opName = name.current?.value;
    const opEmail = email.current?.value;
    const opMessage = message.current?.value;

    if (opEmail && opName && opMessage) {
      try {
        setIsLoading(true);
        const url = import.meta.env.VITE_ENDPOINT;
        console.log(url);
        const res = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ opName, opEmail, opMessage }),
        });
        await res.json();
        if (res.ok) {
          setError(false);
          setSubmitText("Your Request was sent!");
        } else {
          setSubmitText("Failed");
          setError(true);
        }
      } catch (error) {
        console.log(error);
        setError(true);
        setSubmitText("Failed to send message");
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div className={styles.pageContainer}>
      <div>
        <Header title="Lets connect," />
      </div>
      <form
        action="https://getform.io/f/512dc3bc-d706-4758-9cc9-85742221854b"
        method="POST"
        onSubmit={(e) => handleFormSubmit(e)}
        className={styles.formContainer}
      >
        <div className={styles.row}>
          <Input ref={name} style={{ width: "100%" }} id="Name" type="text" />
          <Input
            ref={email}
            style={{ width: "100%" }}
            id="Email"
            type="email"
          />
        </div>
        <div>
          <Input ref={message} id="Message" type="textarea"></Input>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            style={{ opacity: isLoading ? 0.5 : 1 }}
            disabled={isLoading}
            className={styles.button}
            type="submit"
          >
            <Send size={20} /> Send it!
          </Button>
        </div>
        <div style={{ color: error ? "red" : "green", textAlign: "center" }}>
          {submitText}
        </div>
      </form>
    </div>
  );
}

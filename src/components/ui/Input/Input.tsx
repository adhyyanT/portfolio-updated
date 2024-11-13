import classNames from "classnames";
import styles from "./Input.module.css";
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const InputField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function InputField(props, ref) {
  const { type, ...rest } = props;
  return (
    <div
      className={classNames(styles.inputBox, props.className)}
      style={{ ...props.style }}
    >
      <label className={styles.label} htmlFor={props.id}>
        {props.id}
      </label>
      <input
        ref={ref}
        className={styles.input}
        type={type}
        id={props.id}
        {...rest}
      />
    </div>
  );
});

const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function TextAreaField(props, ref) {
  const { ...rest } = props;
  return (
    <div
      className={classNames(styles.inputBox, props.className)}
      style={{ ...props.style }}
    >
      <label className={styles.label} htmlFor={props.id}>
        {props.id}
      </label>
      <textarea ref={ref} className={styles.textarea} id={props.id} {...rest} />
    </div>
  );
});

export const Input = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Input(props, ref) {
  if ("type" in props && props.type !== "textarea") {
    return (
      <InputField
        ref={ref as React.Ref<HTMLInputElement>}
        {...(props as InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  }
  return (
    <TextAreaField
      ref={ref as React.Ref<HTMLTextAreaElement>}
      {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
    />
  );
});

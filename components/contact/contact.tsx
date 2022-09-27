import styles from "./contact.module.css";
import utilStyles from "../../utils/utils.module.css";

import cn from "classnames";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { FormEvent } from "react";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { name, email, content };
        console.log({ data })
        await fetch("/api/mail", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    return (
        <section className={styles.contact}>
            <div className={cn(
                utilStyles["flex-container"],
                utilStyles["section-heading"]
            )}>
                <MailOutlineIcon />
                <p>Contact</p>
            </div>
            <div className={styles["form-container"]}>
                <form
                    className={cn(
                        styles.form,
                        utilStyles["flex-container"]
                    )}
                    onSubmit={handleSubmit}
                >
                    <input
                        name="name"
                        type="text"
                        autoComplete="off"
                        placeholder="Full Name"
                        className={styles["form-item"]}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Email"
                        className={styles["form-item"]}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        className={styles["form-item"]}
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                    <button
                        type="submit"
                        className={styles["form-button"]}
                        disabled={!(name && email && content)}
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}
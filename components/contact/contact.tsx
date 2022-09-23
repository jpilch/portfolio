import styles from "./contact.module.css";
import utilStyles from "../../utils/utils.module.css";

import cn from "classnames";

import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Contact() {
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
                <form className={cn(
                    styles.form,
                    utilStyles["flex-container"]
                )}>
                    <input
                        name="name"
                        type="text"
                        autoComplete="off"
                        placeholder="Full Name"
                        className={styles["form-item"]}
                    />
                    <input
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Email"
                        className={styles["form-item"]}
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        className={styles["form-item"]}
                    />
                    <button
                        type="submit"
                        className={styles["form-button"]}
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}
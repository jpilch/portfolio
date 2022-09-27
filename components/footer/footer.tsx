import styles from "./footer.module.css";
import utilStyles from "../../utils/utils.module.css";

import cn from "classnames";
import { style } from "@mui/system";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={cn(
                utilStyles["flex-container"],
                styles["links-container"]
            )}>
                <div>
                    <p className={styles["list-cat"]}>Socials</p>
                    <ul className={styles.list}>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/jan-pilch-202a30249/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                &gt; LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/jpilch"
                                target="_blank"
                                rel="noreferrer"
                            >
                                &gt; GitHub
                            </a>
                        </li>

                    </ul>
                </div>
                <div>
                    <p className={styles["list-cat"]}>Certificates</p>
                    <ul className={styles.list}>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1bgxGmL_Kb_FYjqD9kgYfzoYKg1XHBWr3/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                &gt; CCNA R&amp;S: Introduction to Networks
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1csMh8vGiRNgR6w8w1EkeE0tz8NYQt699/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                &gt; CCNAv7: Switching, Routing, and Wireless Essentials
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
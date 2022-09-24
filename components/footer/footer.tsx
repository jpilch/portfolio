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
                            >
                                &gt; LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/jpilch"
                                target="_blank"
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
                                href="https://www.linkedin.com/in/jan-pilch-202a30249/"
                                target="_blank"
                            >
                                &gt; CCNA R&amp;S: Introduction to Networks
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/jpilch"
                                target="_blank"
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
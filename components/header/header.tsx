import utilStyles from "../../utils/utils.module.css";
import styles from "./header.module.css";
import cn from "classnames";

import skillStyles from "../skills/skills.module.css";
import projectStyles from "../projects/projects.module.css";
import contactStyles from "../contact/contact.module.css";

import Brightness6Icon from '@mui/icons-material/Brightness6';

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../features/theme/themeSlice";
import HeaderLink from "./header-link";

export default function Header() {
    const themeIconRef = useRef<SVGSVGElement>(null);
    const dispatch = useDispatch();


    return (
        <header className={`${utilStyles["flex-container"]} ${styles.header}`}>
            <nav className={styles.header__nav}>
                <ul className={`${styles.header__links} ${utilStyles["flex-container"]}`}>
                    <HeaderLink name={"Skills"} selector={skillStyles.skills} />
                    <HeaderLink name={"Projects"} selector={projectStyles.projects} />
                    <HeaderLink name={"Contact"} selector={contactStyles.contact} />
                    <li>
                        <a
                            href="https://drive.google.com/drive/folders/1n_k0lfk8dJ6YVdAQPoUa3TUrJ7Qnnrw5?usp=sharing"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                    <li
                        className={utilStyles["flex-container"]}
                        onClick={e => {
                            const target = e.target as HTMLElement;
                            if (!target.closest("svg")) return false;
                            themeIconRef.current?.classList.toggle(styles["header__icon--toggled"]);
                            dispatch(switchTheme());
                        }}
                    >
                        <Brightness6Icon
                            fontSize="small"
                            className={cn(
                                "icon",
                                styles.header__icon
                            )}
                            ref={themeIconRef}
                        />
                    </li>
                </ul>
            </nav>
        </header >
    );
};
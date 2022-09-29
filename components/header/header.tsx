import utilStyles from "../../utils/utils.module.css";
import styles from "./header.module.css";
import cn from "classnames";

import skillStyles from "../skills/skills.module.css";
import projectStyles from "../projects/projects.module.css";
import contactStyles from "../contact/contact.module.css";

import Brightness6Icon from '@mui/icons-material/Brightness6';

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../features/theme/themeSlice";
import HeaderLink from "./header-link";

export default function Header() {
    const themeIconRef = useRef<SVGSVGElement>(null);
    const dispatch = useDispatch();

    const contactRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        contactRef.current = document.querySelector(`.${contactStyles.contact}`);
    }, [])

    console.log({ contactRef })

    return (
        <header className={cn(
            utilStyles["flex-container"],
            styles.header,
        )}>
            <nav className={styles.header__nav}>
                <ul className={cn(
                    utilStyles["flex-container"],
                    styles.header__links
                )}>
                    <HeaderLink name={"Skills"} selector={skillStyles.skills} />
                    <HeaderLink name={"Projects"} selector={projectStyles.projects} />
                    <HeaderLink name={"Contact"} selector={contactStyles.contact} />
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1GZjV3zYTT-atfjGKYtjkFyEeZH9ClXoH/view?usp=sharing"
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
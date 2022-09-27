import utilStyles from "../../utils/utils.module.css";
import styles from "./header.module.css";
import cn from "classnames";

import Brightness6Icon from '@mui/icons-material/Brightness6';

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../features/theme/themeSlice";

export default function Header() {
    const themeIconRef = useRef<SVGSVGElement>(null);
    const dispatch = useDispatch();

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
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
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
                            themeIconRef.current?.classList.toggle("toggled");
                            dispatch(switchTheme());
                        }}
                    >
                        <Brightness6Icon
                            fontSize="small"
                            className={cn(
                                "icon",
                                "theme-icon"
                            )}
                            ref={themeIconRef}
                        />
                    </li>
                </ul>
            </nav>
        </header >
    );
};
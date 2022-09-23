import utilStyles from "../../utils/utils.module.css";
import styles from "./header.module.css";
import cn from "classnames";

import Brightness6Icon from '@mui/icons-material/Brightness6';


export default function Header() {
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
                    <li><Brightness6Icon
                        fontSize="small"
                        className="icon"
                    /></li>
                </ul>
            </nav>
        </header >
    );
};
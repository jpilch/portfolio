import styles from "./introduction.module.css";
import cn from "classnames";

import { useSelector } from "react-redux";
import { selectTheme } from "../../features/theme/themeSlice";

export default function Introduction() {
    const theme = useSelector(selectTheme);

    return (
        <section className={cn(
            styles.introduction,
        )}>
            <p>Hello there! My name is
                <span className={cn(styles.name)}> Jan Pilch.</span>
            </p>
            <p>I am a web developer, interested in both frontend and backend development.</p>
        </section>
    )
}

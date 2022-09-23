import styles from "./introduction.module.css";
import utilStyles from "../../utils/utils.module.css";
import cn from "classnames";

import Brightness6Icon from '@mui/icons-material/Brightness6';

export default function Introduction() {
    return (
        <section className={cn(
            styles.introduction,
        )}>
            <p>Hello there! My name is
                <span className={cn(styles.name)}> Jan Pilch</span>.
            </p>
            <p>I am an aspiring web developer, interested in both frontend and backend development.</p>
        </section>
    )
}
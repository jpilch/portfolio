import styles from "./introduction.module.css";
import utilStyles from "../../utils/utils.module.css";
import cn from "classnames";

import Brightness6Icon from '@mui/icons-material/Brightness6';

export default function Introduction() {
    return (
        <section className={cn(
            styles.introduction,
            utilStyles["flex-container"]

        )}>
            <p>Hello there! My name is
                <span className={cn(styles.name)}>Jan Pilch</span>
                I am an aspiring web developer, interested in both frontend and backend development.
            </p>
            <div className={cn(utilStyles["flex-container"])}>
                <Brightness6Icon
                    fontSize="large"
                    className="icon"
                />
            </div>
        </section>
    )
}
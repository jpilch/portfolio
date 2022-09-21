import styles from "./introduction.module.css";
import utilStyles from "../../utils/utils.module.css";
import cn from "classnames";

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
            <div className="theme-toggler">
                <button>toggle theme</button>
            </div>
        </section>
    )
}
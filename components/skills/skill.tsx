import styles from "./skills.module.css";
import utilStyles from "../../utils/utils.module.css";

import cn from "classnames";

export default function Skill({ src, name }: { src: string, name: string }) {
    return (
        <div className={cn(
            utilStyles["flex-container"],
            styles.item,
        )}>
            <img
                src={src}
                alt={`${name} logo`}
                className="skill-logo"
                height={50}
            />
            <p className="name">{name}</p>
        </div>
    )
}

import styles from "./skills.module.css";
import utilStyles from "../../utils/utils.module.css";
import cn from "classnames";

import HandymanIcon from '@mui/icons-material/Handyman';

import skills from "./skills.json";
import Skill from "./skill";

console.log(skills);

export default function Skills() {
    return (
        <section className={styles.skills}>
            <div className={cn(
                utilStyles["section-heading"],
                utilStyles["flex-container"]
            )}>
                <HandymanIcon />
                <p>Skills</p>
            </div>
            <div className={cn(
                styles.list,
                utilStyles["flex-container"]
            )}>
                {skills.map(({ name, src }) => {
                    return <Skill name={name} src={src} />
                })}
            </div>

        </section>
    )
}
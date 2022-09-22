import styles from "./skills.module.css";
import utilStyles from "../../utils/utils.module.css";
import cn from "classnames";

import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import uniqueId from "lodash/uniqueId";

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
                <HandymanOutlinedIcon />
                <p>Skills</p>
            </div>
            <div className={cn(
                styles.list,
                utilStyles["flex-container"]
            )}>
                {skills.map(({ name, src }) => (
                    <Skill
                        name={name}
                        src={src}
                        key={uniqueId("skill")}
                    />
                ))}
            </div>
        </section>
    )
}
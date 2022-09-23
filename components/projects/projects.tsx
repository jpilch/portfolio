import styles from "./projects.module.css";
import utilStyles from "../../utils/utils.module.css";
import cn from "classnames";

import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import uniqueId from "lodash/uniqueId";

import projects from "./projects.json";
import Project from "./project";

export default function Projects() {
    console.table(projects);
    return (
        <section className={styles.projects}>
            <div className={cn(
                utilStyles["flex-container"],
                utilStyles["section-heading"]
            )}>
                <EngineeringOutlinedIcon />
                <p>Projects</p>
            </div>
            <div className={cn(
                utilStyles["flex-container"],
                styles.list,
            )}>
                {projects.map((project) => (
                    <Project {...project}
                        key={uniqueId("project")}
                    />
                ))}
            </div>
        </section>
    )
}
import styles from "./projects.module.css";
import utilStyles from "../../utils/utils.module.css";
import cn from "classnames";
import ProjectLink from "./project-link";
import uniqueId from "lodash/uniqueId";
import ProjectTag from "./project-tag";

export default function Project({
    name,
    tags,
    desc,
    links
}: {
    name: string,
    tags: Array<string>,
    desc: string,
    links: Array<{ name: string, url: string }>
}) {
    return (
        <div className={styles.item}>
            <div className={cn(utilStyles["flex-container"])}>
                <p className={styles["project-title"]}>
                    {name}
                </p>
                <div className={cn(
                    utilStyles["flex-container"],
                    styles["project-links"],
                )}>
                    {links.map(link => <ProjectLink {...link} key={uniqueId("link")} />)}
                </div>
            </div>
            <div className={cn(
                utilStyles["flex-container"],
                styles["project-tags"]
            )}>
                {tags.map(tag => <ProjectTag tag={tag} key={uniqueId("tag")} />)}
            </div>
            <div className={styles["project-desc"]}>
                {desc}
            </div>
        </div>
    )
}

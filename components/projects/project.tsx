import styles from "./projects.module.css";
import utilStyles from "../../utils/utils.module.css";
import cn from "classnames";
import ProjectLink from "./project-link";

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
            <div>
                <p className="title">{name}</p>
                <div className="links">
                    {links.map(link => <ProjectLink {...link} />)}
                </div>
            </div>
            <div className="tags"></div>
            <div className="desc"></div>
        </div>
    )
}

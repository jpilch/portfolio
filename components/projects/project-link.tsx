import styles from "./projects.module.css";

export default function ProjectLink({ url, name }: { url: string, name: string }) {
    return (
        <div className={styles["project-link"]}>
            <a href={url}>
                {name}
            </a>
        </div>
    )
}

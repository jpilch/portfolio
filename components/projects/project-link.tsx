import styles from "./projects.module.css";

export default function ProjectLink({ url, name }: { url: string, name: string }) {
    return (
        <div className={styles["project-link"]}>
            <a href={url} target="_blank" rel="noreferrer">
                {name}
            </a>
        </div>
    )
}

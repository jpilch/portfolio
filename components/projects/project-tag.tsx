import styles from "./projects.module.css";

export default function ProjectTag({ tag }: { tag: string }) {
    return (
        <div className={styles["project-tag"]}>
            {tag}
        </div>
    )
}
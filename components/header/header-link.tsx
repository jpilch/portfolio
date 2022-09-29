import { useLayoutEffect, useRef } from "react";
import styles from "./header.module.css";

export default function HeaderLink({ selector, name }: { selector: string, name: string }) {
    const sectionRef = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        sectionRef.current = document.querySelector(`.${selector}`);
    }, [])

    return (
        <li
            className={styles["header__link--removable"]}
            onClick={() => sectionRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
            {name}
        </li>
    )
}
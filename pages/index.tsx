import Head from 'next/head'
import styles from '../styles/home.module.css'
import utilStyles from "../utils/utils.module.css";
import cn from "classnames";
import Header from '../components/header/header'

import { useSelector } from 'react-redux'
import { selectTheme } from '../features/theme/themeSlice'
import Introduction from '../components/introduction/introduction'
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

export default function Home(): JSX.Element {

    const theme = useSelector(selectTheme);

    return (
        <div className={styles.container}>
            <Head>
                <title>Jan Pilch</title>
                <meta name="description" content="This is Jan Pilch's portfolio" />
            </Head>

            <Header />

            <main className={cn(
                utilStyles["flex-container"],
                styles.main
            )}>
                <Introduction />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />

        </div>
    );
};


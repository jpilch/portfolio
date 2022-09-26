import '../styles/globals.css';
import "../styles/variables.css";
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../features/app/store';
import ThemeWrapper from '../components/theme-wrapper/theme-wrapper';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeWrapper>
                <Component {...pageProps} />
            </ThemeWrapper>
        </Provider>
    )
}

export default MyApp

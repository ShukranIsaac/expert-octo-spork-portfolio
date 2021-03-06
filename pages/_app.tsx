import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { DataItemsProvider } from '../data/contexts/dataContexts'
import GlobalTheme from '../styles/theme';
import Navigation from "../components/navigation.component"
import Footer from "../components/footer.component"
import Home from '../components/home.component'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalTheme>
            <ThemeProvider attribute="class" enableSystem={false}>
                <DataItemsProvider>
                    <Navigation />

                    <Home component={Component} {...pageProps} />

                    <Footer />
                </DataItemsProvider>
            </ThemeProvider>
        </GlobalTheme>
    )
}

export default MyApp

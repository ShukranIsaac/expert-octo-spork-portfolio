import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import Navigation from "../components/navigation.component"
import Footer from "../components/footer.component"
import Home from '../components/home.component'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" enableSystem={false}>
            <Navigation />
            <Home component={Component} {...pageProps} />
            <Footer />
        </ThemeProvider>
    )
}

export default MyApp
// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//     return <Component {...pageProps} />
// }

// export default MyApp

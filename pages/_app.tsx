import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Navigation from "../components/navigation.component"
import Footer from "../components/footer.component"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//     return <Component {...pageProps} />
// }

// export default MyApp

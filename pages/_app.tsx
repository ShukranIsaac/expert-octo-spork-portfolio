import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Navigation from "../components/navigation.component"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navigation />
            <Component {...pageProps} />
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

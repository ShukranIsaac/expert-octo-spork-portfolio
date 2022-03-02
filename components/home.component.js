import Head from 'next/head'
import About from "../components/about.component";

export default function Home({
    component,
    ...props
}) {
    return (
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>Isaac S. Mwakabira</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-4xl mx-auto mt-16 antialiased">
                <About component={component} {...props} />
            </main>
        </div>
    )
}
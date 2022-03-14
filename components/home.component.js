import Head from 'next/head'

import Acomplishments from './accomplishments'
import BgAnimation from './animations'
import ProfileIntro from './intro'
import Projects from './projects';
import Technologies from './technologies';
import AboutProfile from './about'
import { Section } from '../styles/components'

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

            <main className="max-w-12xl mx-auto mt-16 antialiased">
                <Section grid>
                    <ProfileIntro />
                    <BgAnimation />
                </Section>
                <AboutProfile />
                <Projects />
                <Technologies />
                <Acomplishments />
            </main>
        </div>
    )
}
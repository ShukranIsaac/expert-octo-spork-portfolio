import Head from 'next/head'
import { useContext, useState } from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'

import { DataItemsContext } from '../data/contexts/dataContexts'
import Acomplishments from './accomplishments'
import BgAnimation from './animations'
import ProfileIntro from './intro'
import Projects from './projects';
import Technologies from './technologies';
import AboutProfile from './about'
import { Section } from '../styles/components'

export default function Home({
    component: Component,
    ...props
}) {
    const { dataItems, loading } = useContext(DataItemsContext)

    // console.log(dataItems)

    return (<>
        { loading && <TopBarProgress /> }
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>{dataItems?.username}</title>
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
    </>)
}
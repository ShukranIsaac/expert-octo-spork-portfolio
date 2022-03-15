import Link from "next/link"
import React, { useContext } from "react"
import Image from "next/image"
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

import profile from "../public/mishukran.jpg"
import { Div1, Div2, Div3, NavLink, SocialIcons } from './header.styles'
import ThemeSwitch from '../components/theme.switch.component'
import { DataItemsContext } from '../data/contexts/dataContexts';

const Navigation = () => {
    const { dataItems, loading} = useContext(DataItemsContext)
    const username = `${ dataItems.firstname } ${ dataItems.lastname }`

    return (
        <div className="space-y-14 lg:space-y-24">
            <div className="max-w sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
                <div className="px-4 mx-auto lg:max-w-[70%] flex items-center justify-between">
                    <Div1>
                        <Link href="/">
                            <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                                <Image
                                    src={profile}
                                    alt="Profile"
                                    priority={true}
                                    className="rounded-full"
                                    width={35}
                                    height={35}
                                />
                                <span className="flex ml-3">{ username }</span>
                            </a>
                        </Link>
                    </Div1>
                    <div className="flex items-center justify-between">
                        <Div2>
                            <li className="flex ml-3">
                                <Link href="#projects">
                                    <NavLink>Projects</NavLink>
                                </Link>
                            </li>
                            <li className="flex ml-3">
                                <Link href="#tech">
                                    <NavLink>Technologies</NavLink>
                                </Link>
                            </li>
                            <li className="flex ml-3">
                                <Link href="#about">
                                    <NavLink>About</NavLink>
                                </Link>
                            </li>
                        </Div2>
                        <div className="flex ml-5"></div>
                        <Div3>
                            <SocialIcons href="https://google.com">
                                <AiFillGithub size="3rem" />
                            </SocialIcons>
                            <SocialIcons href="https://google.com">
                                <AiFillLinkedin size="3rem" />
                            </SocialIcons>
                            <SocialIcons href="https://google.com">
                                <AiFillTwitterCircle size="3rem" />
                            </SocialIcons>
                            
                        </Div3>
                        <ThemeSwitch />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
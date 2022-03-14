import React from "react"

const Footer = () => {
    return (
        <div>
            <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
                <div className="max-w-12xl mx-auto lg:max-w-[70%] px-4 text-gray-800 dark:text-white">
                    <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                    <div className="flex flex-col justify-between lg:flex-row items-center">
                        <div className="">
                            Copyright &copy; {
                                new Date().getFullYear()
                            }. All Rights Reserved | ShukranIsaac
                        </div>
                        <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                            <a href="/" className="transition-colors hover:text-yellow-500">Support</a>
                            <a href="/" className="transition-colors hover:text-yellow-500">Privacy & Cookies</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-12xl mx-auto lg:max-w-[70%] px-4 text-gray-800 dark:text-white">
                    <div className="flex flex-col justify-between lg:flex-row items-center">
                        <p></p>
                        <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                            <a
                                href="#"
                                className={"transition-colors hover:text-yellow-500"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                BitBucket
                            </a>
                            <a
                                href="#"
                                className={"transition-colors hover:text-yellow-500"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Medium
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
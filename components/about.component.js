import React from "react"
import Image from "next/image"
import profile from "../public/mishukran.jpg"

const About = ({
    component: Projects,
    ...props
}) => {
    return (<>
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        @mishukran,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        Mr. Isaac Mwakabira is an Associate Lecturer at the University of Malawi,
                         Chancellor College in the Department of Computer Science. 
                         He holds a bachelor of science degree majoring in computer science and 
                         minoring in mathematics and statistics. 
                         Besides these academic credentials, he also holds professional 
                         credentials ranging from areas of software development to networking 
                         and other software development operations in the cloud. He engages 
                         wholeheartedly in these areas. His experience spans from systems 
                         integration, configurability, and interoperability to web systems
                          deployment, maintenance, and support. He is a Software Architect focusing on
                          Cloud Architectures & Serverless technologies ie. Microservices, 
                          Event-Driven Architectures etc. Isaac is currently pursuing an MSc. Informatics, at the University of Malawi.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
        {/* <Projects {...props} /> */}
        </>
    )
}

export default About;
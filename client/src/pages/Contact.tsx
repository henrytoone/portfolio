import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { Tooltip } from 'react-tooltip'

const Contact = () => {
    const iconSize = "2em";
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-sky-500 w-2/3 rounded-lg p-8 shadow-md text-center">
                <h1 className="text-2xl font-bold text-white inline-flex">
                    Contact
                    <MdOutlineContactPage className="ml-3 mt-1" />
                </h1>
                <div className="mt-10 space-x-4">
                    <a href="https://uk.linkedin.com/in/henrytoone" data-tooltip-id="linkedin" target={"_blank"} className="inline-block w-auto">
                        <SiLinkedin  size={iconSize} className="bg-white rounded" style={{color: "#0A66C2"}}/>
                    </a>
                    <a href="https://github.com/henrytoone" data-tooltip-id="github" target={"_blank"} className="inline-block w-auto">
                        <SiGithub size={iconSize}/>
                    </a>
                    <a href="mailto:hello@henrytoone.com" target={"_blank"} data-tooltip-id="email" className="inline-block w-auto">
                        <MdOutlineEmail size={iconSize}/>
                    </a>
                    <a href="https://github.com/henrytoone.gpg" target={"_blank"} data-tooltip-id="key"
                       className="inline-block w-auto">
                        <IoKeyOutline size={iconSize}/>
                    </a>

                </div>
                <Tooltip id="github" className="bg-sky-900" content="Github"/>
                <Tooltip id="linkedin" className="bg-sky-900" content="LinkedIn"/>
                <Tooltip id="email" className="bg-sky-900" content="Email" />
                <Tooltip id="key" className="bg-sky-900" content="Public Key" />
            </div>
        </div>
    )
}

export default Contact
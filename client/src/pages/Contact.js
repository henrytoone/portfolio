import React, { useState, useEffect } from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { Tooltip } from "flowbite-react";

const Contact = () => {
    const iconSize = "2em";

    return (
        <div className="mt-10">
            <h1>Some text</h1>
            <a href="https://uk.linkedin.com/in/henrytoone" target={"_blank"} className="inline-block w-auto">
                <Tooltip arrow={false} className="bg-sky-900" content="LinkedIn" trigger="hover">
                    <SiLinkedin size={iconSize} style={{ color: "#0A66C2" }} />
                </Tooltip>
            </a>

            <a href="https://github.com/henrytoone" target={"_blank"} className="inline-block w-auto">
                <Tooltip arrow={false} className="bg-sky-900" content="Github" trigger="hover">
                    <SiGithub size={iconSize} />
                </Tooltip>
            </a>

            <a href="mailto:hello@henrytoone.com" target={"_blank"} className="inline-block w-auto">
                <Tooltip arrow={false} className="bg-sky-900" content="Email" trigger="hover">
                    <MdOutlineEmail size={iconSize} />
                </Tooltip>
            </a>
        </div>
    );
};

export default Contact;

import React from "react";
import "./style/Home.css";

const Home = () => {
    return (
        <>
            <div id="welcome" className="flex h-[83vh] justify-center items-center">
                <div className="text-center">
                    <h1 className="text-5xl">
                        Hi, I'm <span className="font-bold">Henry Toone</span>.<br />
                        Welcome to my portfolio
                    </h1>
                    <button className="hover:scale-110 ease-in-out duration-300 bg-gradient-to-r from-sky-800 to-sky-900 hover:from-sky-900 hover:to-sky-800 text-3xl outline outline-2 outline-offset-4 rounded-sm mt-10 p-2">
                        <a href="#summary">Let's Go &gt;</a>
                    </button>
                </div>
            </div>
            <div id="summary" className="flex h-[83vh] justify-center items-center">
                <div className="text-center">
                    <h1 className="text-5xl">This is the summary</h1>
                    <button className="hover:scale-110 ease-in-out duration-300 bg-gradient-to-r from-sky-800 to-sky-900 hover:from-sky-900 hover:to-sky-800 text-3xl outline outline-2 outline-offset-4 rounded-sm mt-10 p-2">
                        <a href="#welcome">Back To Top &gt;</a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;

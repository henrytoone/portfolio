import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Projects, Contact, NotFound } from "./pages";
import { Navbar } from "./components";
import 'flowbite';

const App = () => {

    useEffect(() => {
        document.title = "Henry Toone";
    }, [])
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container mx-auto text-zinc-200">
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/projects" element={<Projects />} exact />
                    <Route path="/contact" element={<Contact />} exact />
                    <Route path="*" element={<NotFound />} exact />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

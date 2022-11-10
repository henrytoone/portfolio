import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Info, NotFound } from "./pages";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/info" element={<Info />} exact />
                <Route path="*" element={<NotFound />} exact />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

import React from 'react';
import { Routes, Route } from "react-router-dom";
import MoreExperience from "./container/MoreExperience";
import Home from "./container/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="more-experience" element={<MoreExperience />} />
            </Routes>
        </>
    )
}

export default App;
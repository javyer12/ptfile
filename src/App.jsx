import React from 'react';
import { Routes, Route, } from "react-router-dom";
// import Layout from "./container/Layout";

import MoreExperience from "./container/MoreExperience";
import Home from "./container/Home";

function App() {
    return (
        <React.Fragment>
            {/* <Layout > */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="more-experience" element={<MoreExperience />} />
            </Routes>
            {/* </Layout> */}
        </React.Fragment>
    )
}

export default App;
import React from 'react';
import { Routes, Route, } from "react-router-dom";
import Layout from "./container/Layout";

import Home from "./container/Home";
import Coding from "./container/Coding";
import Design from "./container/Design";
import MorePortfolio from './container/MorePortfolio';

function App() {
    return (
        <React.Fragment>
            <Layout >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coding" element={<Coding />} />
                    <Route path="/design" element={<Design />} />
                    <Route path="/more-portfolio" element={<MorePortfolio />} />
                </Routes>
            </Layout>
        </React.Fragment>
    )
}

export default App;
import React from 'react';
import Heading from '../components/Heading';

const Layout = ({ children }) => {
        return (
                <div className="Layout">
                        <Heading />
                        {children}
                </div>
        );
};

export default Layout;

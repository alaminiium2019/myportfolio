import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import MenuBar from '../MenuBar/MenuBar';
import Projects from '../Projects/Projects';
import './Header.css';

const Header = () => {
    return (
        <div className="headerBg header">
            <MenuBar></MenuBar>
        </div>
    );
};

export default Header;
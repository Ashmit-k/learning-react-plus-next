'use client'

import React, { useState } from 'react';
import ButtonClass from '../utilities/buttons/button';
import { ChevronDown, X, Menu } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            {/* Fullscreen Mobile Menu */}
            <div className={`mobileMenu ${isOpen ? 'open' : ''}`}>
                <div className="closeIcon" onClick={() => setIsOpen(false)}>
                    <X size={20} color='white' />
                </div>
                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Why Us?</a></li>
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">For Developers</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>
                <div className="navButtons">
                    <ButtonClass buttonText='Login' />
                </div>
            </div>

            {/* Desktop Navbar */}
            <div className="navbar">
                <div className="logoDiv">
                    <img src="/assets/logo.png" alt="logo" />
                </div>
                {/* Hamburger Menu for Mobile */}
                <div className="hamburger" onClick={() => setIsOpen(true)}>
                    <Menu size={20} color='white' />
                </div>

                <div className="navLinks">
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Why Us?</a></li>
                        <li><a href="#">Plans</a></li>
                        <li><a href="#">For Developers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="navButtons">
                    <ButtonClass buttonText='Login' />
                </div>
            </div>
        </>
    );
};

export default Navbar;

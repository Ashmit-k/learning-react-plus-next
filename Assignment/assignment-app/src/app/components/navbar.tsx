import React from 'react'
import ButtonClass from '../utilities/buttons/button'
import { ChevronDown } from 'lucide-react';


const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logoDiv ">
                    <img src="/assets/logo.png" alt="logo" />
                </div>
                <div className="navLinks">
                    <ul>
                        <li><a href="#">Products </a></li>
                        <li><a href='#'>Why Us?</a></li>
                        <li><a href='#'>Plans</a></li>
                        <li><a href='#'>For Develops</a></li>
                        <li><a href='#'>Contact</a></li>

                    </ul>
                </div>

                <div className="navButtons">
                    <ButtonClass buttonText='Login' />
                </div>
            </div>

        </>
    )
}

export default Navbar
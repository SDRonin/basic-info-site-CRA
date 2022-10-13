import React from "react"
import logo from '../logo.svg';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="react icon"/>
                <p className="navTitle">ReactFacts</p>
            </div>
            <p className="navExtraTitle">React Course - Project 1</p>
        </nav>
    )
}
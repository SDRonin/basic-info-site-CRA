import React from "react"
import bgLogo from "../react-icon-large.png"

export default function Main() {
    return (
        <div className="mainContent" style={{background: `no-repeat right 75% url(${bgLogo})` }}>
            <h1 className="mainContentTitle">Fun facts about React</h1>
            <ul className="mainContentList">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
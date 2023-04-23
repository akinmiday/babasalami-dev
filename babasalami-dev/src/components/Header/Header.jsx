import "./header.css"
import React from "react"

function Header() {
    return (
        <nav>
            <div className="left-side" >
                <img src="../../../public/babasalami-logo.png" alt="logo Image" />
                <h3> Babasalami Developers</h3>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>About us </li>
                        <li>Our services</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                        <li>Careers</li>
                        <li>FAQs</li>
                    </ul>
                </nav>
            </div>
        </nav>
    )
}

export default Header
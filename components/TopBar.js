import React, { Component } from 'react'
import Logo from '../img/logo.jpg'

export class TopBar extends Component {
    render() {
        return (
            <div className="TopBar  d-flex justify-content-around ">
                    <div>
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link active text-white" href="#">ABOUT</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">SCHEDULE</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">MEDIA</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">LOCATION</a></li>
                     <li className="nav-item"><a className="nav-link text-white" href="#">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default TopBar

import React, { Component } from 'react'
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export class HeaderInner extends Component {
    render() {
        return (
            <div className="HeaderInnerText ">
                <h2>COMPLEXJIUJITSU.BE</h2>
                <h1 className="font-weight-bolder">BECOME A MASTER</h1>
                <button class="button-white">ONZE LOCATIES</button>
                <div>
                    <a className="text-white px-2" href="https://www.facebook.com/aangelooww" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faFacebookSquare}/><span className="px-1">Like</span></a> 
                    <a className="text-white  px-2" href="https://www.instagram.com/angeliinoooo/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faInstagram}/> <span className="px-1">Share</span></a>
                </div>
            </div>
               
            
            
        )
    }
}

export default HeaderInner

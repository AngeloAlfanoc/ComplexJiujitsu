import React, { Component } from 'react'
import Topbar from './TopBar'
export class FooterInner extends Component {

    render() {
        return (
            <div>
                <div>Logo</div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta justo at vehicula mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <Topbar />
            </div>
        )
    }
}
export default FooterInner

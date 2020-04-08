import React, { Component } from 'react'
export class AboutUs extends Component {
    render() {
        return (
            <section>
                <div className="about d-flex justify-content-center align-items-center">
                    <h2 className="text-white">About us</h2>
                </div>
                <div className="container">
                    <p className="text-center my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis elementum neque. Nam orci risus, congue ut convallis vel, volutpat sit amet libero. Vestibulum eget interdum orci. Aliquam congue eleifend vehicula. Morbi tempus laoreet urna, et consequat nulla dictum eu. Aliquam sed neque nec sem sagittis fringilla a rhoncus felis. Aenean ut mauris gravida, fringilla quam at, porttitor massa. Nullam suscipit sem vel dictum venenatis. Aenean sit amet orci lacinia ipsum convallis imperdiet eu id dolor. Suspendisse eget tortor aliquet, venenatis dolor ut, condimentum lorem. Sed elementum eu augue non tristique. Pellentesque molestie est id magna imperdiet, non consectetur odio luctus. Nulla ac tincidunt lectus, et pharetra ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel tellus vehicula, faucibus nulla in, malesuada tortor.</p>
                    <div className="w-100">
                        <h3 className="text-center">Oprichters</h3>
                        <div className="d-flex flex-row justify-content-around align-content-center">
                            <div>
                                <h3 className="text-center">Christo Lappas</h3>
                                <div className="align-self-center">img here</div>
                                <button>Follow</button>
                                <p  className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis elementum neque.</p>
                            </div>
                            <div>
                                <h3>Andor Vrinssen</h3>
                                <div>img here</div>
                                <button>Follow</button>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis elementum neque.</p>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default AboutUs

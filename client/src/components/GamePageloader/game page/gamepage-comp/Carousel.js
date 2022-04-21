import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import slide1 from '../Slides-images/slide1.jpg';
import slide2 from '../Slides-images/slide2.jpeg';
import slide3 from '../Slides-images/sllide3.jpeg';
import slide4 from '../Slides-images/slide4.jpg';
import { Link } from "react-router-dom";

export class CarouselN extends Component {
    render() {
        return (
            <div>
                <div>
                    <Carousel>
                        <div>

                            <img className="img" src={slide1} alt="game" />
                            <div className="caption">
                                <h3 className="heading" id="head1">VALORANT </h3>
                                <h4 className="introduction"> valorant is free-to-play first-person hero shooter. A 5v5 character-based tactical FPS.</h4>
                                <Link className="play" to="/game/Valorant"> Play Now</Link>
                            </div>
                        </div>
                        <div>



                            <img className="img" src={slide2} alt="game" />
                            <div className="caption">
                                <h3 className="heading" id="head2">FORTNITE</h3>
                                <h4 className="introduction">valorant is free-to-play first-person hero shooter. A 5v5 character-based tactical FPS.</h4>

                                <Link className="play" to="/game/Fortnite"> Play Now</Link>
                            </div>
                        </div>

                        <div>


                            <img className="img" src={slide3} alt="game" />
                            <div className="caption">
                                <h3 className="heading" id="head3">PUBG</h3>
                                <h4 className="introduction">valorant is free-to-play first-person hero shooter. A 5v5 character-based tactical FPS.</h4>
                                <Link className="play" to="/game/Pubg"> Play Now</Link>
                            </div>

                        </div>
                        <div>
                            <img className="img" src={slide4} alt="game" />
                            <div className="caption">
                                <h3 className="heading" id="head4">GTA-V</h3>
                                <h4 className="introduction">valorant is free-to-play first-person hero shooter. A 5v5 character-based tactical FPS.</h4>
                                <Link className="play" to="/game/Gta-V"> Play Now</Link>
                            </div>


                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default CarouselN
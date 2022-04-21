import React, {Component} from 'react';
import { Button } from './Button';
import './HeroSection.css';
import video from '../../videos/gameplay1.mp4'

class HeroSection extends Component {
    render(){
    return (
        <div className='hero-container'>
            <video autoPlay muted>
                <source src={video} type="video/mp4"/>
            </video>
            <h1>WELCOME FOLKS!</h1>
            <p>CONTINUE WITH YOUR EXPLORATION</p>
            <div className="hero-btns">
                <Button 
                buttonSize='btn--large'
                >
                    EXPLORE
                </Button>
            </div>
        </div>
    )
}
}

export default HeroSection;

import React from 'react'
import './hero.css';
import '../App.css';
import { Button } from './Button';
function Hero() {
  return (
    <div clasNames="hero-container" >
    <video src='/videos/video-2.mp4' 
    autoPlay loop muted/>
        <h1>ADVETURE AWAITS</h1>
        <p>Let's GOO...!</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' >
                GET STARTED
            </Button>
            <Button className="btns" 
            buttonStyle='btn--primary'
            buttonSize='btn--large' >
                Watch Trailer <i className="fa fa-play-circle"/>
            </Button>
        </div>
    

    </div>
  )
}

export default Hero
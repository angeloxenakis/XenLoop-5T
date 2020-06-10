import React from 'react'
import { Hero } from '../assets/xenloop-hero.png'
// import { trackEffect } from '../assets/track-effects.png'
import { trackControls } from '../assets/track-controls.png'

export function About() {
    return (
        <div className="about-container">
            <div className="hero-text">
                <h1>X E N L O O P - 5 T</h1>
                <p>XenLoop-5T is a freeware audio loop station designed to give musicians access to loop station 
                    functionality without breaking the bank. Record audio on separate tacks and play them back on 
                    a loop in order to fill out your sound.
                </p>
            </div>
            <div className="hero"><img width="100%" src={require('../assets/xenloop-hero.png')}/></div>
            <div className="about">
                <div className="about-text-left">
                    <h3>T R A C K &nbsp; D E T A I L S </h3>
                    <p>Edit your track's title by simply clicking track title display. Control your track's individual 
                        Volume, and toggle Delay & Reverb effects.
                    </p>
                </div>
                <div><img width="100%" src={require('../assets/track-effects.png')}/></div>
            </div>  
            <div className="about">
                <div><img width="100%" src={require('../assets/track-controls.png')}/></div>
                <div className="about-text-right">
                    <h3>T R A C K &nbsp; C O N T R O L S</h3>
                    <p>Record your track audio, play it back, or clear the audio if you didn't like what you laid down.</p>
                </div>
            </div>  
        </div>

    )
}
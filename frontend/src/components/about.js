import React from 'react'
import { Hero } from '../assets/xenloop-hero.png'
// import { trackEffect } from '../assets/track-effects.png'
import { trackControls } from '../assets/track-controls.png'

export function About() {
    return (
        <div className="about-container">
            <div className="hero-text">
                <h1>X E N L O O P - 5 T</h1>
                <p>The XenLoop-5T is a freeware digital audio loop station, designed to provide an audio loop solution
                    to musicians who don't want to spend $500 on a physical loop station or pedalboard. Use your 
                    computer's native microphone, or plug in a better one to capture audio over five spearate tracks, 
                    and play them back in sync to build out your live sound.
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
                    <ul>
                        <li>Delay</li>
                        <li>Reverb</li>
                    </ul>
                </div>
            </div>  
        </div>

    )
}
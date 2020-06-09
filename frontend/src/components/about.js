import React from 'react'
import { Hero } from '../assets/xenloop-hero.png'
import { trackEffect } from '../assets/track-effects.png'
import { trackControls } from '../assets/track-controls.png'

export function About() {
    return (
        <div>
            <div className="about">
                <div className="about-text">
                    <h1>X E N L O O P - 5 T</h1>
                    <p>The XenLoop-5T is a freeware digital audio loop station, designed to provide a audio loop solution
                        to musicians who don't want to spend $500 on a physical loop station or pedalboard. Use your 
                        computer's native microphone, or plug in a better one to capture audio over five spearate tracks, 
                        and play them back in sync to build out your live sound.
                    </p>
                </div>
                <div><img src={trackEffect}/></div>
            </div>
            <div className="about">
                <div><img src={trackEffect}/></div>
                <div className="about-text">
                    <h3>T R A C K &nbsp; H E A D E R </h3>
                    <ul>
                        <li>Track Number</li>
                        <li>Track Title: Rename tracks by click name</li>
                    </ul>
                    <h3>E F F E C T S </h3>
                    <ul>
                        <li>Delay</li>
                        <li>Reverb</li>
                    </ul>
                    </div>
            </div>  
            <div className="about">
                <div><img src={trackEffect}/></div>
                <div className="about-text">
                    <h3>C O N T R O L S</h3>
                    <ul>
                        <li>Delay</li>
                        <li>Reverb</li>
                    </ul>
                </div>
            </div>  
        </div>

    )
}
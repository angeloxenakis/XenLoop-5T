import React, { useEffect, useState } from 'react';
import clearIcon from "../assets/clear-icon.svg"
import playPauseIcon from "../assets/play-pause-icon.svg"
import metroIcon from "../assets/metro-icon.svg"
import  click1 from "../assets/click1.wav"
import click2 from "../assets/click2.wav"
import Metronome from './Metronome'
import { Knob } from "react-rotary-knob";
import Toggle from 'react-toggle'


export function MainPanel(props) {
    let [ playing, togglePlay ] = useState(false)
    let [ count, setCount ] = useState(0)
    let [ bpm, setBpm ] = useState(120)
    let [ beatsPerMeasure, setFrequency ] = useState(4)
    let [ timer, setTimer ] = useState(0)
    let [ playBtnColor, playBtnChange ] = useState("small-btn")

    let play = () => {
        if (playBtnColor == "small-btn") {
            playBtnChange("small-btn-green")
            props.playAll()
        } else {
            playBtnChange("small-btn")
        }
    }


    return (
        <div className="main-info">
            <div className="master-vol">
                <div className="large-knob"><div className="large-tick"></div></div>
                <div className="master-vol-title"><p>MASTER VOLUME</p></div>
            </div>
            <div className="master-title">
                <hr></hr>
                <div className="xenloop-title"><h1>X E N L O O P - 5 T</h1></div>
                <div className="project-title" contenteditable="true">FINAL PROJECT SHOWCASE</div>
            </div>
            <div className="main-controls">
                <div className="ctrl-line-1">
                    <hr></hr>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div className="main-btns">
                    <div className="main-control">
                        <p className="ctrl-title">PLAY/PAUSE</p>
                        <div className={playBtnColor} onClick={play}><img height="15px" src={playPauseIcon}/></div>
                    </div>
                    <div className="main-control">
                        <p className="ctrl-title">CLEAR TRACKS</p>
                        <div className="small-btn"><img height="18px" src={clearIcon}/></div>
                    </div>
                    <Metronome setTrackTime={props.setTrackTime}/>
                </div>
            </div>
            <div className="master-rev">
                <div>
                    <hr></hr>
                </div>
                <div className="medium-knob"><div className="medium-tick"></div></div>
                <Toggle icons={false}/>
                    {/* defaultChecked={this.state.tofuIsReady}
                    icons={false}
                    onChange={this.handleTofuChange} /> */}
                <div className="master-rev-title"><p>MASTER REVERB</p></div>
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import clearIcon from "../assets/clear-icon.svg"
import playPauseIcon from "../assets/play-pause-icon.svg"
import metroIcon from "../assets/metro-icon.svg"
import  click1 from "../assets/click1.wav"
import click2 from "../assets/click2.wav"
import Metronome from './Metronome'
import { Knob } from "react-rotary-knob";
import { Donut } from 'react-dial-knob'
import Toggle from 'react-toggle'


export function MainPanel(props) {
    let [ playing, togglePlay ] = useState(false)
    let [ count, setCount ] = useState(0)
    let [ bpm, setBpm ] = useState(120)
    let [ beatsPerMeasure, setFrequency ] = useState(4)
    let [ timer, setTimer ] = useState(0)
    let [ playBtnColor, playBtnChange ] = useState("small-btn")
    let [gainValue, setGainValue] = useState(7)
    let [reverbValue, setReverbValue] = useState(5)

    let play = () => {
        props.playAll()
        if (playBtnColor == "small-btn") {
            playBtnChange("small-btn-green")
        } else {
            playBtnChange("small-btn")
        }
    }


    return (
        <div className="main-info">
            <div className="master-vol">
                <Donut 
                    className="big-knob"
                    diameter={110}
                    min={0}
                    max={10}
                    step={.5}
                    value={props.globalGainLevel}
                    theme={{
                        donutColor: 'white',
                        bgrColor: '#333333',
                        maxedBgrColor: '#051622',
                        centerColor: '#333333',
                        centerFocusedColor: '#333333',
                        donutThickness: 8
                    }}
                    onValueChange={props.setGlobalGainLevel}
                    ariaLabelledBy={'my-label'}
                />
                <div className="master-vol-title"><p>MASTER VOLUME</p></div>
            </div>
            <div className="master-title">
                <hr></hr>
                <div className="xenloop-title"><h1>X E N L O O P - 5 T</h1></div>
                <div className="project-title" contenteditable="true">Untitled Project</div>
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
                        <div className={playBtnColor} onMouseDown={play}><img height="15px" src={playPauseIcon}/></div>
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
                    <Donut 
                        className="big-knob"
                        diameter={72}
                        min={0}
                        max={10}
                        step={.5}
                        value={reverbValue}
                        theme={{
                            donutColor: 'white',
                            bgrColor: '#333333',
                            maxedBgrColor: '#051622',
                            centerColor: '#333333',
                            centerFocusedColor: '#333333',
                            donutThickness: 6
                        }}
                        onValueChange={setReverbValue}
                        ariaLabelledBy={'my-label'}
                    />
                <Toggle icons={false}/>
                    {/* defaultChecked={this.state.tofuIsReady}
                    icons={false}
                    onChange={this.handleTofuChange} /> */}
                <div className="master-rev-title"><p>MASTER REVERB</p></div>
            </div>
        </div>
    )
}
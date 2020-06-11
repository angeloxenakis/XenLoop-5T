import React, { useEffect, useState } from 'react';
import clearIcon from "../assets/clear-icon.svg"
import playPauseIcon from "../assets/play-pause-icon.svg"
import metroIcon from "../assets/metro-icon.svg"
import  click1 from "../assets/click1.wav"
import click2 from "../assets/click2.wav"
import Metronome from './Metronome'
import { Knob } from "react-rotary-knob";
import Toggle from 'react-toggle'


export function MainInfo(props) {
    let [ playing, togglePlay ] = useState(false)
    let [ count, setCount ] = useState(0)
    let [ bpm, setBpm ] = useState(120)
    let [ beatsPerMeasure, setFrequency ] = useState(4)
    let [ timer, setTimer ] = useState(0)
    let [ playBtnColor, playBtnChange ] = useState("small-btn")

    let metroClick1 = new Audio(click1);
    let metroClick2 = new Audio(click2);

    let play = () => {
        if (playBtnColor == "small-btn") {
            playBtnChange("small-btn-green")
        } else {
            playBtnChange("small-btn")
        }
    }

    // console.log(trackTime)

    let playClick = () => {
        console.log(playing)
        // The first beat will have a different sound than the others
        if(count % beatsPerMeasure === 0) {
          metroClick2.play();
        } else {
          metroClick1.play();
        }
        // Keep track of which beat we're on
        setCount(count + 1 % beatsPerMeasure)
      }

    let startStop = () => {
        if (playing === true) {
          // Stop the timer
          clearInterval(timer);
          togglePlay(false)
        } else {
          // Start a timer with the current BPM
          let timer = () => {
            setInterval(
                playClick(),
                (60 / bpm) * 1000
              );
          } 
          timer();
          setCount(0)
          togglePlay(true)
          playClick();
        }
      };


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
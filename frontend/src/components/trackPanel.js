import React, { useEffect, useState } from 'react';
import recordIcon from "../assets/record-icon.svg"
import clearIcon from "../assets/clear-icon.svg"
import playPauseIcon from "../assets/play-pause-icon.svg"
import { render } from "react-dom";
import { Knob } from "react-rotary-knob";
import Toggle from 'react-toggle'

export function TrackPanel(props) {
    let context = new AudioContext();
    let [ mediaRecorder, toggleRecord ] = useState(false)
    let [ trackAudio , updateAudio ] = useState([new Audio])
    let [ trackVolume , adjustVolume ] = useState(0.5)
    let [ recBtnColor, recBtnChange ] = useState("medium-btn")
    let [ playStatus, setPlayStatus ] = useState(true)
    let [ playBtnColor, playBtnChange ] = useState("large-btn")

    let record = () => {
        if (mediaRecorder.state == "recording") {
            mediaRecorder.stop()
            console.log("Stopped recording")
            recBtnChange("medium-btn")
        } else {
            mediaRecorder.start()
            console.log(`Recording audio on Track ${props.trackNum} (${props.trackName})...`)
            recBtnChange("medium-btn-red")
        }
    }

    let audioCtx = new window.AudioContext();
    
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                let mediaRecorder = new MediaRecorder(stream);

                toggleRecord(mediaRecorder)

                const audioChunks = [];
                mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });

                mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    console.log(audioUrl)
                    updateAudio(new Audio(audioUrl))
                });
            });
    }, [])

    let play = () => {
        trackAudio.play();
    }

    let pause = () => {
        trackAudio.pause();
    }

    let playLoop = () => {
        setPlayStatus(!playStatus)
        console.log(playStatus)
        trackAudio.addEventListener('ended', () => {
            trackAudio.currentTime = 0;
            play();
        }, false)
        play();
        
        // if (playStatus === true) {
        //     while (playStatus === true) {
        //         play();
        //         console.log("Playing Audio")
        //         play();
        //     }
        // } else {
        //     pause();
        //     console.log("Pausing Audio")
        // }

        if (playBtnColor === "large-btn") {
            console.log(playBtnColor)
            playBtnChange("large-btn-green")
        } else {
            playBtnChange("large-btn")
            pause();
        }
    }

    let clearTrack = () => {
        toggleRecord(false)
        updateAudio(new Audio)
        console.log("Track audio cleared")
    }

    return (
        <div className="track-panel">
            <div className="track-header">
                <div className="track-number"><h3>TRACK {props.trackNum}</h3></div>
                <div className="track-title" contenteditable="true">
                    <p>{props.trackName}</p>
                </div>
            </div>
            <div className="effects">
                <div className="track-section"><h4>EFFECTS</h4></div>
                <div className="effect-knobs">
                    <div className="track-volume">
                        <div className="medium-knob"><div className="medium-tick"></div></div>
                        <p>VOLUME</p>
                    </div>
                    <div className="track-effect">
                        <div className="small-knob"><div className="small-tick"></div></div>
                        <Toggle className="reverb-toggle" icons={false}/>
                        <p>REVERB</p>
                    </div>
                    <div className="track-effect">
                        <div className="small-knob"><div className="small-tick"></div></div>
                        <Toggle className="delay-toggle" icons={false}/>
                        <p>DELAY</p>
                    </div>
                </div>
            </div>
            <div className="controls">
                <div className="track-section"><h4>CONTROLS</h4></div>
                <div className="medium-btns">
                    <div className={recBtnColor} onClick={record}><img className="record-icon" src={recordIcon}/></div>
                    <div className="medium-btn" onClick={clearTrack}><img height="24px" src={clearIcon}/></div>
                </div>
                <div className={playBtnColor} onClick={playLoop}><img height="28px" src={playPauseIcon}/></div>
            </div>
        </div>
    )
}
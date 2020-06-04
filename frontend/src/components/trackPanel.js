import React, { useEffect, useState } from 'react';
import recordIcon from "../assets/record-icon.svg"
import clearIcon from "../assets/clear-icon.svg"
import playPauseIcon from "../assets/play-pause-icon.svg"



export function TrackPanel(props) {
    let [ mediaRecorder, toggleRecord ] = useState(false)
    let [ trackAudio , updateAudio ] = useState(new Audio)

    let record = () => {
        if (mediaRecorder.state == "recording") {
            mediaRecorder.stop()
            console.log("Stopped recording")
        } else {
            mediaRecorder.start()
            console.log(`Recording audio on Track ${props.trackNum} (${props.trackName})...`)
        }
    }
    
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);

            toggleRecord(mediaRecorder)

            const audioChunks = [];
            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks);
                const audioUrl = URL.createObjectURL(audioBlob);
                console.log(audioUrl)
                trackAudio = new Audio(audioUrl);
                updateAudio(new Audio(audioUrl))

            });
        });
    }, [])

    let play = () => {
        trackAudio.play();
        console.log("Playing track audio")
    }

    let clearTrack = () => {
        trackAudio = new Audio()
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
                        <div className="medium-knob"></div>
                        <p>VOLUME</p>
                    </div>
                    <div className="track-effect">
                        <div className="small-knob"></div>
                        <div className="effect-toggle"></div>
                        <p>REVERB</p>
                    </div>
                    <div className="track-effect">
                        <div className="small-knob"></div>
                        <div className="effect-toggle"></div>
                        <p>DELAY</p>
                    </div>
                </div>
            </div>
            <div className="controls">
                <div className="track-section"><h4>CONTROLS</h4></div>
                <div className="medium-btns">
                    <div className="medium-btn" onClick={record}><img src={recordIcon}/></div>
                    <div className="medium-btn" onClick={clearTrack}><img height="24px" src={clearIcon}/></div>
                </div>
                <div className="large-btn" onClick={play}><img height="28px" src={playPauseIcon}/></div>
            </div>
        </div>
    )
}
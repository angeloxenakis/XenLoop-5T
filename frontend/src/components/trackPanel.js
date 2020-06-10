import React, { useEffect, useState } from 'react';
import recordIcon from "../assets/record-icon.svg"
import clearIcon from "../assets/clear-icon.svg"
import playPauseIcon from "../assets/play-pause-icon.svg"

export function TrackPanel(props) {
    let context = new AudioContext();
    let [ mediaRecorder, toggleRecord ] = useState(false)
    let [ trackAudio , updateAudio ] = useState([new Audio])
    let [ trackVolume , adjustVolume ] = useState(0.5)
    let [ recBtnColor, recBtnChange ] = useState("medium-btn")
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
        trackAudio.volume = trackVolume;
        console.log(trackAudio.volume)
        trackAudio.play();
        console.log("Playing track audio")

        if (playBtnColor === "large-btn") {
            console.log(playBtnColor)
            playBtnChange("large-btn-green")
        } else {
            playBtnChange("large-btn")
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
                    <div className={recBtnColor} onClick={record}><img className="record-icon" src={recordIcon}/></div>
                    <div className="medium-btn" onClick={clearTrack}><img height="24px" src={clearIcon}/></div>
                </div>
                <div className={playBtnColor} onClick={play}><img height="28px" src={playPauseIcon}/></div>
            </div>
        </div>
    )
}
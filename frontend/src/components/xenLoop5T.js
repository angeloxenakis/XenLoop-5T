import React, { useEffect, useState } from 'react';
import { MainPanel } from './mainPanel'
import { Tracks } from './tracks'
import click1 from '../assets/click1.wav';
import click2 from '../assets/click2.wav';

export function XenLoop5T() {

    let fakeDatabase = [
        {
            trackNum: 1,
            trackName: "RHTHYM GUITAR"
        },
        {
            trackNum: 2,
            trackName: "LEAD GUITAR"
        },
        {
            trackNum: 3,
            trackName: "BEATBOX"
        },
        {
            trackNum: 4,
            trackName: "LEAD VOCALS"
        },
        {
            trackNum: 5,
            trackName: "BACKUP VOCALS"
        }
    ]

    let [ trackTime, setTrackTime ] = useState(4000)
    let [ playAllStatus, setPlayAll] = useState(false)
    let [ audioCtx, setAudioCtx ] = useState(new AudioContext)
    let [ trackOneAudio, setTrackOne ] = useState(new Audio)
    let [ trackTwoAudio, setTrackTwo ] = useState(new Audio)
    let [ trackThreeAudio, setTrackThree ] = useState(new Audio)
    let [ trackFourAudio, setTrackFour] = useState(new Audio)
    let [ trackFiveAudio, setTrackFive ] = useState(new Audio)

    // console.log(trackOneAudio)

    let playAll = () => {
        if (playAllStatus === false) {
            setPlayAll(true)
            console.log("Playing All Tracks")
            if (trackOneAudio.loop === true) {
                trackOneAudio.connect(audioCtx.destination)
                console.log(trackOneAudio)
            }
            if (trackTwoAudio.loop === true) {
                trackTwoAudio.connect(audioCtx.destination)
            }
            if (trackThreeAudio.loop === true) {
                trackThreeAudio.connect(audioCtx.destination)
            }
            if (trackFourAudio.loop === true) {
                trackFourAudio.connect(audioCtx.destination)
            }
            if (trackFiveAudio.loop === true) {
                trackFiveAudio.connect(audioCtx.destination)
            }
        } else {
            setPlayAll(false)
            console.log("All Tracks Stopped")
            if (trackOneAudio.loop === true) {
                trackOneAudio.disconnect(audioCtx.destination)
            }
            if (trackTwoAudio.loop === true) {
                trackTwoAudio.disonnect(audioCtx.destination)
            }
            if (trackThreeAudio.loop === true) {
                trackThreeAudio.disconnect(audioCtx.destination)
            }
            if (trackFourAudio.loop === true) {
                trackFourAudio.disconnect(audioCtx.destination)
            }
            if (trackFiveAudio.loop === true) {
                trackFiveAudio.disconnect(audioCtx.destination)
            }
        }

    }

    return (
        <div className="container">
            <div className="main-panel">
                <div className="main-container">
                    <MainPanel
                        setTrackTime={setTrackTime}
                        audioCtx={audioCtx}
                        playAll={playAll}
                    />
                    <Tracks 
                        tracks={fakeDatabase} 
                        trackTime={trackTime}
                        audioCtx={audioCtx}
                        setTrackOne={setTrackOne}
                        setTrackTwo={setTrackTwo}
                        setTrackThree={setTrackThree}
                        setTrackFour={setTrackFour}
                        setTrackFive={setTrackFive}
                    />
                </div>
            </div>
        </div>
    )
}
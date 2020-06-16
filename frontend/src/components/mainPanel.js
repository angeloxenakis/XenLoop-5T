import React, { useEffect, useState } from 'react';
import { MainInfo } from './mainInfo'
import { Tracks } from './tracks'

export function MainPanel() {

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
    let [ mainAudioCtx, setMainAudio ] = useState(new AudioContext)
    let [ trackOneAudio, setTrackOne ] = useState(new Audio)
    let [ trackTwoAudio, setTrackTwo ] = useState(new Audio)
    let [ trackThreeAudio, setTrackThree ] = useState(new Audio)
    let [ trackFourAudio, setTrackFour] = useState(new Audio)
    let [ trackFiveAudio, setTrackFive ] = useState(new Audio)

    console.log(trackOneAudio)

    let playAll = () => {
        console.log("Playing All Tracks")
        trackOneAudio.play()
    }


    return (
        <div className="container">
            <div className="main-panel">
                <div className="main-container">
                    <MainInfo 
                        setTrackTime={setTrackTime}
                        mainAudioCtx={mainAudioCtx}
                        playAll={playAll}
                    />
                    <Tracks 
                        tracks={fakeDatabase} 
                        trackTime={trackTime}
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
import React, { useEffect, useState } from 'react';
import { MainPanel } from './mainPanel'
import { Tracks } from './tracks'

export function XenLoop5T() {

    let fakeDatabase = [
        {
            trackNum: 1,
            trackName: "Track 1"
        },
        {
            trackNum: 2,
            trackName: "Track 2"
        },
        {
            trackNum: 3,
            trackName: "Track 3"
        },
        {
            trackNum: 4,
            trackName: "Track 4"
        },
        {
            trackNum: 5,
            trackName: "Track 5"
        }
    ]

    let [ trackTime, setTrackTime ] = useState(4000)
    let [ playAllStatus, setPlayAll] = useState(false)
    let [ audioCtx, setAudioCtx ] = useState(new AudioContext)

    let [ globalGain, createMainGain ] = useState(audioCtx.createGain())
    let [ globalGainLevel, setGlobalGainLevel ] = useState(7)
    globalGain.gain.value = globalGainLevel * 0.1
    console.log(globalGain.gain.value)
    globalGain.connect(audioCtx.destination)

    let [ globalReverb, createGlobalReverb ] = useState(audioCtx.createConvolver())
    let [ globalReverbLevel, setGlobalReverbLevel ] = useState(5)
    globalReverb.connect(globalGain)

    let [ trackOneAudio, setTrackOne ] = useState(new Audio)
    let [ trackTwoAudio, setTrackTwo ] = useState(new Audio)
    let [ trackThreeAudio, setTrackThree ] = useState(new Audio)
    let [ trackFourAudio, setTrackFour] = useState(new Audio)
    let [ trackFiveAudio, setTrackFive ] = useState(new Audio)

    let playTrackOne = () => {
        trackOneAudio.connect(globalGain)
    }

    let pauseTrackOne = () => {
        trackOneAudio.disconnect(globalGain)
    }

    let playAll = () => {
        if (playAllStatus === false) {
            setPlayAll(true)
            console.log("Playing All Tracks")
            if (trackOneAudio.loop === true) {
                trackOneAudio.connect(globalGain)
                console.log(trackOneAudio)
            }
            if (trackTwoAudio.loop === true) {
                trackTwoAudio.connect(globalGain)
            }
            if (trackThreeAudio.loop === true) {
                trackThreeAudio.connect(globalGain)
            }
            if (trackFourAudio.loop === true) {
                trackFourAudio.connect(globalGain)
            }
            if (trackFiveAudio.loop === true) {
                trackFiveAudio.connect(globalGain)
            }
        } else if (playAllStatus === true) {
            setPlayAll(false)
            console.log("All Tracks Stopped")
            if (trackOneAudio.loop === true) {
                trackOneAudio.disconnect(globalGain)
            }
            if (trackTwoAudio.loop === true) {
                trackTwoAudio.disconnect(globalGain)
            }
            if (trackThreeAudio.loop === true) {
                trackThreeAudio.disconnect(globalGain)
            }
            if (trackFourAudio.loop === true) {
                trackFourAudio.disconnect(globalGain)
            }
            if (trackFiveAudio.loop === true) {
                trackFiveAudio.disconnect(globalGain)
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
                        globalGainLevel={globalGainLevel}
                        setGlobalGainLevel={setGlobalGainLevel}
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
                        trackOneAudio={trackOneAudio}
                        trackTwoAudio={trackTwoAudio}
                        trackThreeAudio={trackThreeAudio}
                        trackFourAudio={trackFourAudio}
                        trackFiveAudio={trackFiveAudio}
                        playTrackOne={playTrackOne}
                        pauseTrackOne={pauseTrackOne}
                    />
                </div>
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import { MainInfo } from './mainInfo'
import { Tracks } from './tracks'

export function MainPanel() {

    let [ trackTime, setTrackTime ] = useState(2000)

    console.log(trackTime)

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

    return (
        <div className="container">
            <div className="main-panel">
                <div className="main-container">
                    <MainInfo setTrackTime={setTrackTime}/>
                    <Tracks tracks={fakeDatabase} trackTime={trackTime}/>
                </div>
            </div>
        </div>
    )
}
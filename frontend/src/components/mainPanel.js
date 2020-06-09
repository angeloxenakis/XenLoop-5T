import React from 'react'
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

    return (
        <div className="container">
            <div className="main-panel">
                <div className="main-container">
                    <MainInfo/>
                    <Tracks tracks={fakeDatabase}/>
                </div>
            </div>
        </div>
    )
}
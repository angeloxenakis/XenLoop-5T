import React from 'react'
import { MainInfo } from './mainInfo'
import { Tracks } from './tracks'

export function MainPanel() {
    return (
        <div className="container">
            <div className="main-panel">
                <div className="main-container">
                    <MainInfo/>
                    <Tracks/>
                </div>
            </div>
        </div>
    )
}
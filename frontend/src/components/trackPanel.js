import React from 'react'

export function TrackPanel() {
    return (
        <div className="track-panel">
            <div className="track-header">
                <div className="track-number"><h3>TRACK 1</h3></div>
                <div className="track-title">
                    <p>GUITAR LEAD</p>
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
                    <div className="medium-btn"></div>
                    <div className="medium-btn"></div>
                </div>
                <div className="large-btn"></div>
            </div>
        </div>
    )
}
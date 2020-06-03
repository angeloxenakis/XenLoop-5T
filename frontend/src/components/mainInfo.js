import React from 'react'

export function MainInfo() {
    return (
        <div className="main-info">
            <div className="master-vol">
                <div className="large-knob"></div>
                <div className="master-vol-title"><p>MASTER VOLUME</p></div>
            </div>
            <div className="master-title">
                <hr></hr>
                <div className="xenloop-title"><h1>X E N L O O P - 5 T</h1></div>
                <div className="project-title">FINAL PROJECT SHOWCASE</div>
            </div>
            <div className="main-controls">
                <div className="ctrl-line-1">
                    <hr></hr>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div className="main-btns">
                    <div className="main-control">
                        <p>PLAY/PAUSE</p>
                        <div className="small-btn"></div>
                    </div>
                    <div className="main-control">
                        <p>CLEAR TRACKS</p>
                        <div className="small-btn"></div>
                    </div>
                    <div className="main-control">
                        <p>METRONOME</p>
                        <div className="small-btn"></div>
                    </div>
                    <div className="main-control">
                        <p>BPM:</p>
                        <div className="small-btn"></div>
                    </div>
                </div>
            </div>
            <div className="master-rev">
                <div>
                    <hr></hr>
                </div>
                <div className="medium-knob"></div>
                <div className="master-rev-toggle"></div>
                <div className="master-rev-title"><p>MASTER REVERB</p></div>
            </div>
        </div>
    )
}
import React from 'react'
import { TrackPanel } from './trackPanel'

export function Tracks(props) {
    return (
        <div className="tracks">
            <TrackPanel 
                audioCtx={props.audioCtx}
                trackNum={props.tracks[0].trackNum} 
                trackName={props.tracks[0].trackName}
                trackTime={props.trackTime}
                setTrackOne={props.setTrackOne}
                setTrackTwo={props.setTrackTwo}
                setTrackThree={props.setTrackThree}
                setTrackFour={props.setTrackFour}
                setTrackFive={props.setTrackFive}
            />
            <TrackPanel 
                audioCtx={props.audioCtx}
                trackNum={props.tracks[1].trackNum} 
                trackName={props.tracks[1].trackName}
                trackTime={props.trackTime}
                setTrackOne={props.setTrackOne}
                setTrackTwo={props.setTrackTwo}
                setTrackThree={props.setTrackThree}
                setTrackFour={props.setTrackFour}
                setTrackFive={props.setTrackFive}
            />
            <TrackPanel 
                audioCtx={props.audioCtx}
                trackNum={props.tracks[2].trackNum} 
                trackName={props.tracks[2].trackName}
                trackTime={props.trackTime}
                setTrackOne={props.setTrackOne}
                setTrackTwo={props.setTrackTwo}
                setTrackThree={props.setTrackThree}
                setTrackFour={props.setTrackFour}
                setTrackFive={props.setTrackFive}
            />
            <TrackPanel 
                audioCtx={props.audioCtx}
                trackNum={props.tracks[3].trackNum} 
                trackName={props.tracks[3].trackName}
                trackTime={props.trackTime}
                setTrackOne={props.setTrackOne}
                setTrackTwo={props.setTrackTwo}
                setTrackThree={props.setTrackThree}
                setTrackFour={props.setTrackFour}
                setTrackFive={props.setTrackFive}
            />
            <TrackPanel 
                audioCtx={props.audioCtx}
                trackNum={props.tracks[4].trackNum} 
                trackName={props.tracks[4].trackName}
                setTrackOne={props.setTrackOne}
                setTrackTwo={props.setTrackTwo}
                setTrackThree={props.setTrackThree}
                setTrackFour={props.setTrackFour}
                setTrackFive={props.setTrackFive}
            />
        </div>
    )
}
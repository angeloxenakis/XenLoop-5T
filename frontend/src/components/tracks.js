import React from 'react'
import { TrackPanel } from './trackPanel'

export function Tracks(props) {
    return (
        <div className="tracks">
            <TrackPanel trackNum={props.tracks[0].trackNum} trackName={props.tracks[0].trackName}/>
            <TrackPanel trackNum={props.tracks[1].trackNum} trackName={props.tracks[1].trackName}/>
            <TrackPanel trackNum={props.tracks[2].trackNum} trackName={props.tracks[2].trackName}/>
            <TrackPanel trackNum={props.tracks[3].trackNum} trackName={props.tracks[3].trackName}/>
            <TrackPanel trackNum={props.tracks[4].trackNum} trackName={props.tracks[4].trackName}/>
        </div>
    )
}
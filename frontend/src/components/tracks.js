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
                trackAudio={props.trackOneAudio}
                setTrackOne={props.setTrackOne}
                playTrack={props.playTrackOne}
                pauseTrack={props.pauseTrackOne}
            />
            <TrackPanel 
                audioCtx={props.audioCtx}
                trackNum={props.tracks[1].trackNum} 
                trackName={props.tracks[1].trackName}
                trackTime={props.trackTime}
                setTrackTwo={props.setTrackTwo}
                trackAudio={props.trackTwoAudio}
            />
            <TrackPanel 
                audioCtx={props.audioCtx}
                trackNum={props.tracks[2].trackNum} 
                trackName={props.tracks[2].trackName}
                trackTime={props.trackTime}
                setTrackThree={props.setTrackThree}
                trackAudio={props.trackThreeAudio}
            />
            <TrackPanel 
                audioCtx={props.audioCtx}
                trackNum={props.tracks[3].trackNum} 
                trackName={props.tracks[3].trackName}
                trackTime={props.trackTime}
                setTrackFour={props.setTrackFour}
                trackAudio={props.trackFourAudio}
            />
            <TrackPanel 
                audioCtx={props.audioCtx}
                trackNum={props.tracks[4].trackNum} 
                trackName={props.tracks[4].trackName}
                setTrackFive={props.setTrackFive}
                trackAudio={props.trackFiveAudio}
            />
        </div>
    )
}
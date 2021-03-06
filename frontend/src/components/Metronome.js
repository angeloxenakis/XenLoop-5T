import React, { Component } from 'react';
import './Metronome.css';
import metroIcon from "../assets/metro-icon.svg"

// Webpack will load the audio files
import click1 from '../assets/click1.wav';
import click2 from '../assets/click2.wav';

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playingClick: false,
      count: 0,
      bpm: 120,
      beatsPerMeasure: 8,
      // trackTime: 0,
      buttonClass: "small-btn"
    };

    // Create Audio objects with the files Webpack loaded,
    // and we'll play them later.
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    // The first beat will have a different sound than the others
    if(count % beatsPerMeasure === 0 || count % beatsPerMeasure === 4) {
      this.click2.play();
    } else {
      this.click1.play();
    }

    // Keep track of which beat we're on
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  }

  startStop = () => {
    if(this.state.playingClick) {
      // Stop the timer
      clearInterval(this.timer);
      this.setState({
        playingClick: false,
        buttonClass: "small-btn"
      });
    } else {
      // Start a timer with the current BPM
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState({
        count: 0,
        playingClick: true,
        buttonClass: "small-btn-green"
        // Play a click "immediately" (after setState finishes)
      }, this.playClick);
    }
  }

  handleBpmChange = (event, props) => {
    const bpm = event.target.value;
    let divideBy = (this.state.bpm / 4)
    this.props.setTrackTime((60 / divideBy) * 1000)

    if(this.state.playingClick) {
      // Stop the old timer and start a new one
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

      // Set the new BPM, and reset the beat counter
      this.setState({
        count: 0,
        bpm,
      });
    } else {
      // Otherwise just update the BPM
      this.setState({ bpm });
    }
  }

  

  render() {
    const { playingClick, bpm } = this.state;

    return (
      <div className="metronome">

        <div className="main-control">
            <p>METRONOME</p>
            <div className={this.state.buttonClass} onClick={this.startStop}><img height="18px" src={metroIcon}/></div>
        </div>
        <div className="main-control">
            <p className="bpm-title">BPM:</p>
            <div className="bpm-control">
            <div className="bpm-input">{bpm}</div>
              <div className="bpm-slider">
                <input
                  type="range"
                  orient="vertical"
                  min="60"
                  max="240"
                  value={bpm}
                  onChange={this.handleBpmChange} />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Metronome;

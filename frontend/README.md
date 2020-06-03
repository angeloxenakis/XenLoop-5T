# XenLoop - 5T

Xenloop - 5T is a digital audio loop station app designed to offer a free solution to musicians looking to utilize layered loops.
The XenLoop - 5T offers five tracks in which to record on, three layers over each track, reverb and delay effects, and the ability to save your projects and return to them.

## Technologies
* NodeJS
* React
* Redux

--------------------------------------------------------------------------------

## Models & Object Relationships

### User -< Projects -< Tracks -< Track Layers
- User
    * Has many Projects

    - Project
        * Belongs to a User
        * Has many Tracks

        - Tracks
            * Belongs to a Project
            * Has many Track Layers (stretch)

            - Track Layers (stretch)
                * Belongs to a Track

--------------------------------------------------------------------------------

## User Stories // Deliverables
* User can record audio on a track and play it back
* User can clear a track
* User can rename a track title
* User can control master volume
* User can play/pause all tracks
* User can clear all tracks
* User can record audio on multiple tracks and play them in sync
* User can play a metronome
* User can control track and metronome BPM
* User can login

## User Stories // Stretch Goals
* User can save a project that perists
* User can add Track Layer to a track (which records audio and layers it over existing track audio)
* User can apply reverb effect on track
* User can apply delay effect on track
* User can apply master reverb to all tracks
* Mobile friendly version (browser, not native app)
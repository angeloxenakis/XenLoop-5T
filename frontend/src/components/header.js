import React from 'react'

export function Header() {
    return(
        <div className="header">
            <div className="nav">
                <a href="/"><strong>XenLoop-5T</strong></a>
                <a href="/">New</a>
                <p>Save</p>
                <a href="/about">Info</a>
                <p>Contact</p>
            </div>
            <div className="login">
                <a href="/login">Login</a>
            </div>
        </div>
    )
}
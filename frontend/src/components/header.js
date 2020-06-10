import React from 'react'

export function Header() {
    return(
        <div className="header">
            <div className="nav">
                <a href="/"><strong>XenLoop-5T</strong></a>
                <p>File</p>
                <a href="/about">Info</a>
                <p>Contact</p>
            </div>
            <div className="login">
                <p>Login</p>
            </div>
        </div>
    )
}
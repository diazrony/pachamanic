import React, { useEffect } from 'react'

export const Presentations = () => {
    useEffect(() => {
        scroll();
    })
    let scroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            <h1>Presentation</h1>
        </div>
    )
}

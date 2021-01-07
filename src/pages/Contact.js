import React, { useEffect } from 'react'

export const Contact = () => {
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
            <h1>Contact</h1>
        </div>
    )
}

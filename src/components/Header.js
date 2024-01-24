import React from "react"
import img from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                alt="Smily face"
                src={img} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}
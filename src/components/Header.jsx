import React from "react";
import trollface from '../assets/troll-face.svg';

export default function Header() {
    return (
        <header className="w-screen flex items-center h-16 bg-violet-700 text-white">
            <img src={trollface} className="h-full mr-2" alt="troll-face"/>
            <h2 className="text-xl mr-auto"> Meme Generator</h2>
            <h4>React Project - Scrimba</h4>
        </header>
        
    )
}
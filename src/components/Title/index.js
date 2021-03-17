import React from 'react';
import './style.css';

export default function Title({title, subtitle}) {
    return (
        <div className="text-part">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )  
}
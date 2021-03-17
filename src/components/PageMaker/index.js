import React from 'react';
import './style.css';
import Logo from '../Logo';

export default function PageMaker({content}) {
    return (
        <div style={{display: 'flex'}}>
            <Logo />
            <div className="main">
                    <div className="top"></div>
                    <div className="content">            
                        <div>
                            {content}
                        </div>
                    </div>  
                </div>
        </div>
    )  
}
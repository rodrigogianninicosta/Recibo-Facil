import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css'

export default function Logo() {
    const history = useHistory();
    const [path, setPath] = useState('');
    useEffect(() => { console.log(history.location.pathname)
        setPath(history.location.pathname);
    }, [])
    return (
        <div style={{display:"flex"}}>
            {
                (history.location.pathname !== '/') && [
                <div className="menu-container">
                    <div className="structure" onClick={() => history.push('/')}>
                        <h1>Recibo</h1>
                        <h1>Facil</h1>
                    </div>
                </div>,
                <div className="top"></div>  
                ]
            }
        </div>
    )
}
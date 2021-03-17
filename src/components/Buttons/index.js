import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

export default function Buttons({texts}) {
    const history = useHistory();
    return (
        <div className="btn">
            <button style={{marginLeft: '60%'}} onClick={() => {
                history.location.pathname === '/entrar' || history.location.pathname === '/novoNegocio' ? 
                history.push('/negocios') : history.location.pathname === '/novoRecibo' ?  
                history.push('/novoRecibo2') : history.location.pathname === '/novoRecibo2' ?  
                history.push('/recibos') : history.push('/entrar')
            }}>
                {texts[0]}
                <img src={'/images/arrow-right.svg'} alt="arrow"/>
            </button>
            <button onClick={() => {
                history.location.pathname === '/entrar' ? 
                history.push('/cadastrar') : history.push('/entrar')
            }}
            style={(texts[1] === null) ? {display:'none'} : null}>
                {texts[1]}
            </button>
        </div>
    )
}
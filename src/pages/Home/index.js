import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

export default function Home() {
    const history = useHistory();
    return(
        <div style={{height:"200vh"}}>
            <div className="core">
                <div className="upset">
                    <div>
                        <h1>Recibo</h1>
                        <h1>Facil</h1>
                    </div>
                    <div className="button-part">
                        <button className="btn1" onClick={()=>{history.push('/entrar')}}>Entrar</button>
                        <button className="btn2" onClick={()=>{history.push('/cadastrar')}}>Cadastre-se</button>
                    </div>
                </div>
                <div className="mensage">
                    <h1>Cansado de criar recibos manualmente?</h1>
                    <h1>A Recibo Facil te ajuda com isso!</h1>
                    <h1>E tao facil que nem precisa de acento</h1>
                </div>
            </div>
            <div className="second-core">
                <div className="downset">
                    <div className="div-img"></div>
                    <div className="div-text">
                        <h1>A Recibo Facil te oferece uma plataforma totalmente gratuita. Em com apenas alguns
                        cliques já tenha o seu recibo fiscal emitido. Reserve o seu tempo para o que realmente importa!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
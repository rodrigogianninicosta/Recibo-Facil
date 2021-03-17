import React from 'react';
import PageMaker from '../../components/PageMaker';
import Title from '../../components/Title';
import Buttons from '../../components/Buttons';
import './style.css';

export default function NovoRecibo() {
    return(
        <div>
            <PageMaker content={[
                <div>
                    <Title 
                        title={'Criar Recibo'} 
                        subtitle={null}
                    />
                    <div>
                        <div className="add">
                            <div>
                                <label>Cod</label>
                                <input style={{width: "5vw"}}/>
                            </div>
                            <div>
                                <label>Serviço</label>
                                <input style={{width: "33vw"}}/>
                            </div>
                            <div>
                                <label>Preço</label>
                                <input style={{width: "5vw"}}/>
                            </div>
                            <img src={'/images/plus.svg'} alt="plus"/>
                        </div>
                        <div style={{marginTop: '4%'}}>
                            <div className="to">
                                <div className="many">
                                    <label>12321</label>
                                    <label>Instalar Caixa d'agua</label>
                                    <label>12</label>
                                </div>
                                <img src={'/images/plus.svg'} alt="plus"/>
                            </div>
                        </div>
                        <div className="btn-this">
                            <Buttons texts={['Continuar', null]} />
                        </div>
                    </div>
                </div>
            ]}/>
        </div>
    );
}
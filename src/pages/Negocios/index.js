import React from 'react';
import { useHistory } from 'react-router-dom';
import PageMaker from '../../components/PageMaker';
import Title from '../../components/Title';
import './style.css';

export default function Negocios() {
    const history = useHistory();
    return(
        <div>
            <PageMaker content={[
                <div className="container fax">
                    <Title 
                        title={null} 
                        subtitle={'Negócios'}
                    />
                    <div className="item" onClick={() => history.push('/novoNegocio')}>
                        <label>Criar novo</label>
                        <img src={'/images/plus.svg'} alt="plus"/>
                    </div>
                    <div className="item" onClick={() => history.push('/recibos')}>
                        <label>Toninho obras</label>
                        <img src={'/images/arrow-right.svg'} alt="arrow"/>
                    </div>
                </div>
            ]}/>
        </div>
    );
}
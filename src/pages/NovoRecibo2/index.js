import React from 'react';
import PageMaker from '../../components/PageMaker';
import Field from '../../components/Field';
import Title from '../../components/Title';
import Buttons from '../../components/Buttons';
import './style.css';

export default function NovoRecibo2() {
    return(
        <div>
            <PageMaker content={[
                <div className="number-two">
                    <Title 
                        title={'Recibo'} 
                        subtitle={'Adicionar cliente'}
                    />
                    <Field fields={['Nome', 'Sobrenome', 'Endereço', 'Cpf', 'Telefone']} />
                    <Buttons texts={['Criar', null]} />
                </div>
            ]}/>
        </div>
    )
}
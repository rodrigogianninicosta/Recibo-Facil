import React from 'react';
import PageMaker from '../../components/PageMaker';
import Field from '../../components/Field';
import Title from '../../components/Title';
import Buttons from '../../components/Buttons';

export default function NovoNegocio() {
    return(
        <div>
            <PageMaker content={[
                <div style={{paddingTop: '10%'}}>
                    <Title 
                        title={'Criar negócio'} 
                        subtitle={'Informações do negócio'}
                    />
                    <Field fields={['Nome', 'Endereço', 'Cnpj', 'Telefone']} />
                    <Buttons texts={['Cadastrar', null]} />
                </div>
            ]}/>
        </div>

    );
}
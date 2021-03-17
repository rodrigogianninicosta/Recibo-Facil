import React from 'react';
import PageMaker from '../../components/PageMaker';
import Field from '../../components/Field';
import Title from '../../components/Title';
import Buttons from '../../components/Buttons';

export default function Cadastro() {
    return(
        <div>
            <PageMaker content={[
                <div style={{paddingTop: '10%'}}>
                    <Title 
                        title={'Criar conta'} 
                        subtitle={'Informações de login'}
                    />
                    <Field fields={['Email', 'Senha', 'Confirmar senha']} />
                    <Buttons texts={['Continuar', 'Entrar']} />
                </div>
            ]}/>
        </div>
    )
}
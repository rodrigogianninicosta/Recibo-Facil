import React from 'react';
import PageMaker from '../../components/PageMaker';
import Field from '../../components/Field';
import Title from '../../components/Title';
import Buttons from '../../components/Buttons';

export default function Login() {
    return(
        <div>
            <PageMaker content={[
                <div style={{paddingTop: '20%'}}>
                    <Title 
                        title={'Entrar'} 
                        subtitle={null}
                    />
                    <Field fields={['Email', 'Senha']} />
                    <Buttons texts={['Login', 'Criar conta']} />
                </div>
            ]}/>
        </div>
    )
}
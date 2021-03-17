import React from 'react';
import './style.css';

export default function Field({fields}) {
    return (
        <div className='container fix'>
        {
            fields.map((description, index) => {
                return(
                    <div key={index + 2} className='field'>
                        <label>{description}</label>
                        {
                            description.toLowerCase().includes('senha') ? 
                            <input type={'password'} maxLength={30} /> : description.toLowerCase().includes('telefone') ||
                            description.toLowerCase().includes('cnpj') || description.toLowerCase().includes('cpf') ?
                            <input type={'number'} /> : <input maxLength={40} />
                        }
                    </div>
                )
            })
        }
        </div>
    )  
}
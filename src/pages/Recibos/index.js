import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import PageMaker from '../../components/PageMaker';
import Title from '../../components/Title';

export default function NovoNegocio() {
    const history = useHistory();
    const [legend, setLegend] = useState([]);
    useEffect(() => {
        setLegend(['Criar Recibo', 'Recibos', 'Serviços'])
    }, [])
    return (
        <div>
            <PageMaker content={[
                <div style={{paddingLeft: '0%'}}>
                    <Title 
                        title={'Toninho Obras'} 
                        subtitle={'Menu'}
                    />
                    <div className="card-part">
                    {
                        legend.map((legend, index) => {
                            return(
                                <div key={index + 1} className="carder" onClick={() =>
                                    (legend === 'Criar Recibo')? history.push('/novoRecibo') :
                                    (legend === 'Recibos')? history.push('/meusRecibos') :
                                    history.push('/serviços')    
                                }>
                                    <img src={'/images/plus.svg'} alt="login"/>
                                    <span>{legend}</span>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            ]}/>
        </div>
    )  
}
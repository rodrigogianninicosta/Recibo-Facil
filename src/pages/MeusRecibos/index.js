import React from 'react';
import PageMaker from '../../components/PageMaker';
import Title from '../../components/Title';
import './style.css';

export default function MeusRecibos() {
    return(
        <div>
            <PageMaker content={[
                <div>
                    <Title 
                        title={'Serviços'} 
                        subtitle={null}
                    />
                    <div>
                        <div className="to">
                            <div className="many newer">
                                <div>
                                    <label style={{marginBottom:'10%'}}>Status</label>
                                    323.123.123.123/1
                                </div>
                                <div>
                                    <label style={{marginBottom:'10%'}}>Status</label>
                                    <label style={{color:'orange'}}>Em andamento</label>
                                </div>
                                <label style={{fontSize: "2em"}}>R$ 7200</label>
                            </div>
                        </div>
                        <div className="to">
                            <div className="many newer">
                                <div>
                                    <label style={{marginBottom:'10%'}}>Status</label>
                                    323.123.123.123/1
                                </div>
                                <div>
                                    <label style={{marginBottom:'10%'}}>Status</label>
                                    <label style={{color:'green', marginRight:'40px'}}>Completo    </label>
                                </div>
                                <label style={{fontSize: "2em"}}>R$ 7200</label>
                            </div>
                        </div>
                    </div>
                </div>
            ]}/>
        </div>
    )
}
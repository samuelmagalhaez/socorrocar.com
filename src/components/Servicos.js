import React from 'react'

const Servicos = props => {
    return (        
        <div id='services' className='container-fluid text-center'>
            <h2>Serventias</h2>
            <h4>Nossa missão é facilitar a sua vida</h4>
            <br />
            <div className='row '>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-time logo-small'></span>
                    <h4>TEMPO</h4>
                    <p>Texto aleatório só p dar ênfase</p>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-earphone logo-small'></span>
                    <h4>PRONTIDÃO</h4>
                    <p>Texto aleatório só p dar ênfase</p>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-qrcode logo-small'></span>
                    <h4>QR CODE</h4>
                    <p>Texto aleatório só p dar ênfase</p>
                </div>
            </div>
            <br /><br />
            <div className='row '>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-phone logo-small'></span>
                    <h4>APP</h4>
                    <p>Texto aleatório só p dar ênfase</p>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-road logo-small'></span>
                    <h4>ABRANGÊNCIA</h4>
                    <p>Texto aleatório só p dar ênfase</p>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-wrench logo-small'></span>
                    <h4>ESPECIALISTA</h4>
                    <p>Texto aleatório só p dar ênfase</p>
                </div>
            </div>
        </div>
    )
}

export default Servicos
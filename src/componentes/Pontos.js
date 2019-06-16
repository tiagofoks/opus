import React from 'react'

const Pontos = props => {
    return (
        <div id='services' className='container-fluid text-center'>
            <h2>PONTOS</h2>
            <h4>Troca de pontos por serviços</h4>
            <br />
            <div className='row '>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-off logo-small'></span>
                    <h4>MASSAGEM</h4>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-heart logo-small'></span>
                    <h4>AULA DE LIBRAS</h4>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-lock logo-small'></span>
                    <h4>AULA DE BRAILE</h4>
                </div>
            </div>
            <br /><br />
            <div className='row '>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-leaf logo-small'></span>
                    <h4>TRADUÇÃO DE LIBRAS</h4>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-certificate logo-small'></span>
                    <h4>FISIOTERAPIA</h4>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-wrench logo-small'></span>
                    <h4>ENFERMAGEM</h4>
                </div>
            </div>
        </div>
    )
}

export default Pontos
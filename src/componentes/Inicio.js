import React from 'react'

const Inicio = props => {
    return (
        <div>
            {/* Container (About Section) */}
            <div id='about' className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h2>Sobre nós</h2><br />
                        <h4>Pessoas incluindo inclusive pessoas.</h4><br />
                        <p>Somos quem somos, e nossas diferenças nos tornam iguais.</p>
                        
                    </div>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-signal logo'></span>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-grey'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-globe logo '></span>
                    </div>
                    <div className='col-sm-8'>
                        <h2>Valores</h2><br />
                        <h4><strong>Missão:</strong> Ser uma rede social onde possamos encontrar nossos iguais, nossos diferentes, e sermos encontrados.</h4><br />
                        <p><strong>Visão:</strong> Rede social inclusiva, gameficada, para gerar amizades, empregos, conhecimento e diversão de todos. Se você está aqui, pode e deve contribuir.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio
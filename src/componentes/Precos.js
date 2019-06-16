import React from 'react'

const Precos = props => {
    return (
        <div id='pricing' className='container-fluid'>
            <div className='text-center'>
                <h2>Vagas</h2>
                <h4>Cheque as vagas de emprego disponíveis</h4>
            </div>
            <div className='row '>
                <div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Operacional e Tecnico</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>Atendente de telemarcketing</strong> Empresa token</p>
                            <p><strong>Massoterapeuta</strong> Empresa Corinthians</p>
                            <p><strong>Tecnico em enfermagem</strong> Empresa Hospital da vovó</p>
                        </div>
                        <div className='panel-footer'>
                            <h3>Criado em: <strong>14/06/2019</strong></h3>
                            <h3>Expira em: <strong>26/06/2019</strong></h3>
                            <button className='btn btn-lg'>Candidatar</button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Administrativo</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>Auxiliar Adminsitrativo</strong> Empresa Apex</p>
                            <p><strong>Inspetor Segurança </strong> Empresa Crystal</p>
                        </div>
                        <div className='panel-footer'>
                            <h3>Criado em: <strong>14/06/2019</strong></h3>
                            <h3>Expira em: <strong>26/06/2019</strong></h3>
                            <button className='btn btn-lg'>Candidatar</button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4 col-xs-12'>
                    <div className='panel panel-default text-center'>
                        <div className='panel-heading'>
                            <h1>Superior</h1>
                        </div>
                        <div className='panel-body'>
                            <p><strong>Desenvolvedor</strong> Empresa de programa</p>
                            <p><strong>Enfermeiro padrão</strong> Empresa hospital da vovó</p>
                        </div>
                        <div className='panel-footer'>
                            <h3>Criado em: <strong>14/06/2019</strong></h3>
                            <h3>Expira em: <strong>26/06/2019</strong></h3>
                            <button className='btn btn-lg'>Candidatar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Precos
import React from  'react'

const Servicos = props => {
    return (
        <div id='services' className='container-fluid text-center'>
  <h2>SERVIÇOS</h2>
  <h4> Nós oferecemos</h4>
 <br />
  <div className='row '>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-off logo-small'></span>
      <h4>CRIATIVIDADE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-heart logo-small'></span>
      <h4>SEGURANÇA</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-lock logo-small'></span>
      <h4>BELOS TRABALHOS</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
 <br /><br />
  <div className='row '>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-leaf logo-small'></span>
      <h4>ESTILO</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-certificate logo-small'></span>
      <h4>CERTIFICADO</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-wrench logo-small'></span>
      <h4>FERRAMENTAS</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
</div>
    )
}
export default Servicos
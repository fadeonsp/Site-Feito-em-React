import React from 'react'

const Contatos = props => {
    return (
        <div id='contact' className='container-fluid bg-grey'>
  <h2 className='text-center'>Contatos</h2>
  <div className='row'>
    <div className='col-sm-5'>
      <p>Entre em contato conosco e entraremos em contato em 24 horas.</p>
      <p><span className='glyphicon glyphicon-map-marker'></span> São Paulo, SP</p>
      <p><span className='glyphicon glyphicon-phone'></span> 011 98877-6655</p>
      <p><span className='glyphicon glyphicon-envelope'></span> minhaempresa@gmail.com</p>
    </div>
    <div className='col-sm-7 '>
      <div className='row'>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='Nome' Nome='Nome' placeholder='Nome' type='text' required />
        </div>
        <div className='col-sm-6 form-group'>
          <input className='form-control' id='email' Nome='email' placeholder='Email' type='email' required />
        </div>
      </div>
      <textarea className='form-control' id='comentarios' Nome='comentarios' placeholder='Comentarios' rows='5'></textarea><br />
      <div className='row'>
        <div className='col-sm-12 form-group'>
          <button className='btn btn-default pull-right' type='submit'>Enviar</button>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default Contatos
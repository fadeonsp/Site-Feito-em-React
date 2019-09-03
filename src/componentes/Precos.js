import React from 'react'

const Precos = props => {
    return (
        <div id='pricing' className='container-fluid'>
  <div className='text-center'>
    <h2>Preços</h2>
    <h4>Escolha o melhor plano para você</h4>
  </div>
  <div className='row '>
    <div className='col-sm-4 col-xs-12'>
      <div className='panel panel-default text-center'>
        <div className='panel-heading'>
          <h1>Nível 1</h1>
        </div>
        <div className='panel-body'>
          <p><strong>20</strong> Lorem</p>
          <p><strong>15</strong> Ipsum</p>
          <p><strong>5</strong> Dolor</p>
          <p><strong>2</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className='panel-footer'>
          <h3>R$19</h3>
          <h4>por mês</h4>
          <button className='btn btn-lg'>Inscreva-se</button>
        </div>
      </div>      
    </div>     
    <div className='col-sm-4 col-xs-12'>
      <div className='panel panel-default text-center'>
        <div className='panel-heading'>
          <h1>Pleno</h1>
        </div>
        <div className='panel-body'>
          <p><strong>50</strong> Lorem</p>
          <p><strong>25</strong> Ipsum</p>
          <p><strong>10</strong> Dolor</p>
          <p><strong>5</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className='panel-footer'>
          <h3>R$29</h3>
          <h4>por mês</h4>
          <button className='btn btn-lg'>Inscreva-se</button>
        </div>
      </div>      
    </div>       
    <div className='col-sm-4 col-xs-12'>
      <div className='panel panel-default text-center'>
        <div className='panel-heading'>
          <h1>Professional</h1>
        </div>
        <div className='panel-body'>
          <p><strong>100</strong> Lorem</p>
          <p><strong>50</strong> Ipsum</p>
          <p><strong>25</strong> Dolor</p>
          <p><strong>10</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className='panel-footer'>
          <h3>R$49</h3>
          <h4>por mês</h4>
          <button className='btn btn-lg'>Inscreva-se</button>
        </div>
      </div>      
    </div>    
  </div>
</div>
    )
}
export default Precos
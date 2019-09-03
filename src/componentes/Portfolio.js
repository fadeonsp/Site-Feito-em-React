import React from 'react'

const Portfolio = props => {
    return (
     <div>
     <div id='portfolio' className='container-fluid text-center bg-grey'>
     <h2>Portfolio</h2><br />
     <h4>O que criamos</h4>
     <div className='row text-center '>
       <div className='col-sm-4'>
         <div className='thumbnail'>
           <img src='rio.jpg' alt='Rio de Janeiro' width='400' height='300' />
           <p><strong>Rio de Janeiro</strong></p>
           <p>Sim,Trabalhamos no Rio</p>
         </div>
       </div>
       <div className='col-sm-4'>
         <div className='thumbnail'>
           <img src='bh.jpg' alt='Belo Horizonte' width='400' height='300' />
           <p><strong>Belo Horizonte</strong></p>
           <p>Trabalhamos em Belo Horizonte</p>
         </div>
       </div>
       <div className='col-sm-4'>
         <div className='thumbnail'>
           <img src='floripa.jpg' alt='Florianópolis' width='400' height='300' />
           <p><strong>Florianópolis</strong></p>
           <p>Sim, Também em Floripa</p>
         </div>
       </div>
     </div><br />
     
     <h2>O que dizem nossos clientes</h2>
     <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
       {/* Indicators*/}
       <ol className='carousel-indicators'>
         <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
         <li data-target='#myCarousel' data-slide-to='1'></li>
         <li data-target='#myCarousel' data-slide-to='2'></li>
       </ol>
   
       {/* Wrapper for slides*/}
       <div className='carousel-inner' role='listbox'>
         <div className='item active'>
           <h4>Esta empresa é a melhor. Estou muito feliz com o resultado!'<br /><span>Manoel José, Vice President, Comment Box</span></h4>
         </div>
         <div className='item'>
           <h4>Uma palavra ... UAU !!'<br /><span>João Almeida, Venddor, Rep Inc</span></h4>
         </div>
         <div className='item'>
           <h4>'Eu poderia ... ficar mais feliz com esta empresa?'<br /><span>Carlos Rocha, Gerente, FriendsAlot</span></h4>
         </div>
       </div>
   
       {/* Left and right controls*/}
       <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
         <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
         <span className='sr-only'>Previous</span>
       </a>
       <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
         <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
         <span className='sr-only'>Next</span>
       </a>
     </div>
   </div>
     
     </div>
    )
}
export default Portfolio
import { Fade  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeMobileImages = [
  'img/product/mobile-login-s.png',
  'img/product/mobile-menu-s.png',
  'img/product/mobile-separation-s.png',
  'img/product/mobile-picking-s.png'
];

const fadeWebImages = [
  'img/product/web-login.png',
  'img/product/web-log.png',
  'img/product/web-query.png'
];

export const Product = (props) => {
  return (
    <div id='product' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Produto</h2>
          <p>
            Conheça um pouco sobre o MAGI's.
          </p>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className="slide-container">
              <Fade transitionDuration='1000' duration='2000'>
                <div className="each-fade">
                  <div className="image-container responsive-product">
                    <img src={fadeMobileImages[0]} alt="Mobile"/>
                  </div>
                </div>
                <div className="each-fade">
                  <div className="image-container responsive-product">
                    <img src={fadeMobileImages[1]} alt="Mobile"/>
                  </div>
                </div>
                <div className="each-fade">
                  <div className="image-container responsive-product">
                    <img src={fadeMobileImages[2]} alt="Mobile"/>
                  </div>
                </div>
                <div className="each-fade">
                  <div className="image-container responsive-product">
                    <img src={fadeMobileImages[3]} alt="Mobile"/>
                  </div>
                </div>
              </Fade>
            </div>
            
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h3 className='fa fa-mobile'> Mobile</h3>
              <p>MAGI's mobile é o nosso aplicativo que pode ser utilizado na separação de pedidos e na expedição</p>
              <div className='list-style'>
                  <ul>
                    <li>Suporte para leitor embutido/avulso</li>
                    <li>Montagem de carrinho de separação</li>
                    <li>Pick unitário e pick por peso</li>
                    <li>Agilidade na operação via scanner</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className="slide-container">
              <Fade transitionDuration='1000' duration='2000'>
                <div className="each-fade">
                  <div className="image-container responsive-product">
                    <img src={fadeWebImages[0]} alt="Web"/>
                  </div>
                </div>
                <div className="each-fade">
                  <div className="image-container responsive-product">
                    <img src={fadeWebImages[1]} alt="Web"/>
                  </div>
                </div>
                <div className="each-fade">
                  <div className="image-container responsive-product">
                    <img src={fadeWebImages[2]} alt="Web"/>
                  </div>
                </div>
              </Fade>
            </div>
            
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h3 className='fa fa-desktop'> Portal Web</h3>
              <p>No portal web você tem acesso à todas as informações do sistema, como pedidos, caixas, logs, estatísticas</p>
              <div className='list-style'>
                  <ul>
                    <li>Logs de serviços e hardware</li>
                    <li>Logs de integração</li>
                    <li>Estatísticas</li>
                    <li>Consultas</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
          <div id='lista-mais' className='lista-mais'>
              <ul>
                <li>
                  <a href='#about'>
                    <div className='responsive-mais'>
                      <img src="img/icon/icon-m.png" title="Movimentação - Mais Inteligencia em Software" alt="Movimentação - Mais Inteligencia em Software"/>
                      <h1><span>M</span>ovimentação</h1>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#about'>
                    <div className='responsive-mais'>
                      <img src="img/icon/icon-a.png" title="Movimentação - Mais Inteligencia em Software" alt="Movimentação - Mais Inteligencia em Software"/>
                      <h1><span>A</span>utomação</h1>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#about'>
                    <div className='responsive-mais'>
                      <img src="img/icon/icon-i.png" title="Movimentação - Mais Inteligencia em Software" alt="Movimentação - Mais Inteligencia em Software"/>
                      <h1><span>I</span>nteligência</h1>
                    </div>
                  </a>
                </li>
                <li>
                  <a href='#about'>
                    <div className='responsive-mais'>
                      <img src="img/icon/icon-s.png" title="Movimentação - Mais Inteligencia em Software" alt="Movimentação - Mais Inteligencia em Software"/>
                      <h1><span>S</span>oftware</h1>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Sobre nós</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Porque escolher a MAIS?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

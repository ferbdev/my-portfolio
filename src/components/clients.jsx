export const Clients = (props) => {
  return (
    <div id='clients'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Nossos clientes</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='clients'>
                    <div className='clients-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='clients-content'>
                      <div className='clients-meta'> {d.name} </div>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

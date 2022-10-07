const componentDidMount = () => {


  window.$(document).ready(function () {
    window.$(document).click(function (event) {
        var clickover = window.$(event.target);
        var _opened = window.$(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
          window.$("button.navbar-toggle").click();
        }
        else {
          window.$(".navbar-collapse").collapse('hide')
        }
    });
  });
  
}

export const Navigation = (props) => {
  componentDidMount();
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <img src='img/icon/logo_ferb.png' alt="logo" className='navbar-brand'/>
          <a className='navbar-brand page-scroll' href='#page-top'>
              FERBTECH
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#page-top' className='page-scroll'>
                Início
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Skills
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Experience timeline
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

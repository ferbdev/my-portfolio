const SkillsLine = () => {
  window.$(document).ready(function () {
    window.$(document).scroll(function (event) {
        // Obtém a posição do topo da página
        const timelineItems = document.querySelectorAll('.timeline-item');

        var headerHeight = document.getElementById("divInitialPresentation").clientHeight;

        const top = window.pageYOffset;// - headerHeight;
        const pageSize = window.innerHeight - 250;

        // Percorre todos os itens da timeline
        timelineItems.forEach(item => {
          // Obtém a posição do topo do item da timeline
          const itemTop = item.offsetTop + headerHeight;

          // Verifica se o item da timeline está próximo da área visível da tela
          if (itemTop - top <= pageSize) {
            // Adiciona a classe "active" ao item da timeline
            item.classList.add('active');
          } else {
            // Remove a classe "active" do item da timeline
            item.classList.remove('active');
          }
        });
            });
  });
  
}

export const Skills = (props) => {
  SkillsLine();
  return (
    <div id='skills'>
      <div id='lista-mais' className='lista-mais'>
        <div className='container'>
          <div className='row'>
            <a href='#skills'>
              <div className='responsive-logo'>
                <h1>SKILLS</h1>
              </div>
            </a>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-year">
                  <div className='responsive-logo mainCard'>
                    <h6>Version Control Systems</h6>
                  </div>
                </div>
                <div class="timeline-content">
                  <h3>GitHub</h3>
                  <p>GitFlow </p>
                </div>
                <div class="timeline-content">
                </div>
                <div class="timeline-content">
                  <h3>Bitbucket</h3>
                  <p>GitFlow </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">
                  <div className='responsive-logo mainCard'>
                    <h6>Relational Databases</h6>
                  </div>
                </div>
                <div class="timeline-content">
                  <h3>SQL Server</h3>
                  <p>Entities structure</p>
                  <p>Procedures, functions, views</p>
                </div>
                <div class="timeline-content">
                  <h3>Oracle</h3>
                  <p>Entities structure</p>
                  <p>Procedures, functions, views</p>
                </div>
              </div>
              <div class="timeline-item">
                  <div class="timeline-year">
                    <div className='responsive-logo mainCard'>
                      <h6>Object-Relational Mapping</h6>
                    </div>
                  </div>
                  <div class="timeline-content">
                    <h3>Dapper</h3>
                    <h3>EF</h3>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">
                    <div className='responsive-logo mainCard'>
                      <h6>Web API</h6>
                    </div>
                  </div>
                  <div class="timeline-content">
                    <h3>Título do evento</h3>
                    <p>Conteúdo do evento</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">
                    <div className='responsive-logo mainCard'>
                      <h6>Authentication</h6>
                    </div>
                  </div>
                  <div class="timeline-content">
                    <h3>Título do evento</h3>
                    <p>Conteúdo do evento</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">
                    <div className='responsive-logo mainCard'>
                      <h6>Design and Development Principles</h6>
                    </div>
                  </div>
                  <div class="timeline-content">
                    <p>SOLID</p>
                    <p>DDD</p>
                    <p>KISS</p>
                    <p>Clean Architecture</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">
                    <div className='responsive-logo mainCard'>
                      <h6>Architectural Patterns</h6>
                    </div>
                  </div>
                  <div class="timeline-content">
                    <h3>Monolithic</h3>
                    <p>Conteúdo do evento</p>
                  </div>
                  <div class="timeline-content">
                    <h3>Microservices</h3>
                    <p>Conteúdo do evento</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">
                    <div className='responsive-logo mainCard'>
                      <h6>RTS Communication</h6>
                    </div>
                  </div>
                  <div class="timeline-content">
                    <h3>SignalR</h3>
                    <p>Conteúdo do evento</p>
                  </div>
                  <div class="timeline-content">
                    <h3>TCP/IP</h3>
                    <p>Conteúdo do evento</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">
                    <div className='responsive-logo mainCard'>
                      <h6>Containerzation</h6>
                    </div>
                  </div>
                  <div class="timeline-content">
                    <h3>Docker</h3>
                    <p>Conteúdo do evento</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-year">
                    <div className='responsive-logo mainCard'>
                      <h6>Testing</h6>
                    </div>
                  </div>
                  <div class="timeline-content">
                    <h3>Unit test</h3>
                    <p>Conteúdo do evento</p>
                  </div>
                  <div class="timeline-content">
                    <h3>Functional test</h3>
                    <p>Conteúdo do evento</p>
                  </div>
                  <div class="timeline-content">
                    <h3>Integration test</h3>
                    <p>Conteúdo do evento</p>
                  </div>
                </div>
            </div>      
          </div>
        </div>
      </div>
    </div>
  )
}

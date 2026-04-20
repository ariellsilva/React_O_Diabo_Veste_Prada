import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  
const modalRef = useRef(null);

const abrir = () => modalRef.current.showModal();
const fechar = () => modalRef.current.close();

  return (
    <div className="App">

      <div className='titulo-projeto'>
          <div className='abrir'>
         <a href="#">&#9776; Abrir</a>
        </div>
        <div className='nome-projeto'>
        <h4>O Diabo Veste Prada 2</h4>
        </div>
      </div>

    <div className='menu'>
      <nav>
      <a href="#historia">História</a>
      <a href="#personagem">Personagens</a>
      <a href="#item">Acessórios</a>
      <a href="#resumo">Sinopse</a>
      </nav>
    </div>

  <main>
    <div className='cabeca'>
      <header className='imagem'>

      </header>
      <div className='titulo'>
        <h1>Novo filme do momento:<br />O Diabo Veste Prada 2</h1>

        <p>Confira as principais novidades do longa-metragem!</p>
         <div className='botao-saiba-mais'>
         <button onClick={abrir} id='saber'>Assistir Trailer</button>
         </div>

         <dialog id='modal' ref={modalRef}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HqFn4ufrI7Y?si=NWzBQKl8Ne9n7KlZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className='minimizar'>
          <button onClick={fechar} id='fechar'>X</button>
          </div>
         </dialog>
         </div>
      </div>

      <div className='sobre'>
        <section id='historia'>
          <div className='sessao-sobre'>
          <h2>História</h2>
          <p>Diabo Veste Prada é um filme de comédia dramática lançado em 2006, dirigido por David Frankel e baseado no livro homônimo de Lauren Weisberger. A história gira em torno de Andy Sachs, uma jovem jornalista que consegue um emprego como assistente da poderosa editora de moda Miranda Priestly. O filme explora os desafios e as pressões do mundo da moda, bem como a jornada de Andy para encontrar seu próprio caminho enquanto lida com as demandas implacáveis de Miranda.</p>
           <div className='sobre-imagem'>
           <img src="/img/nome do filme.webp" alt="" />
           </div>
           </div>
        </section>
      </div>

      <div className='acessorios'>
        <section id='item'>
        <div className='acessorios-personagens'>
          <h2>Acessórios</h2>
          <p>Confira os acessórios mais populares dos personagens do filme!</p>
        </div>

        <div className='card-acessorios'>

          <div className='bolsa'>
            <div className='imagem-acessorios'>
             <img src="/img/bolsa da andy.avif" alt=""/>
             <div className='texto'>
              <h4>La Rue</h4>
              <p>de Patricia Field</p>
             </div>
             </div>
            <h4>Bolsa</h4>
            <p>Bolsa da Andrea</p>
          </div>

          <div className='oculos'>
            <div className='imagem-acessorios'>
            <img src="/img/oculos miranda.webp" alt="" />
              <div className='texto'>
              <h4>Óculos Oval</h4>
              <p>da Prada</p>
             </div>
             </div>
            <h4>Óculos</h4>
            <p>Óculos da Miranda</p>
          </div>

          <div className='colar'>
            <div className='imagem-acessorios'>
            <img src="/img/colar andy.jpg" alt="" />
              <div className='texto'>
              <h4>Colar Pérola</h4>
              <p>da Chanel</p>
             </div>
             </div>
            <h4>Colar</h4>
            <p>Colar da Andrea</p>
          </div>

        </div>
        </section>
        </div>

        <div className='sessao-personagens'>
        <section id='personagem'>

          <div className='personagens-titulo'>
          <h2>Personagens Femininas</h2>
          <p>Conheça as personagens principais do filme!</p>
          </div>

          <div className='card-personagens'>

            <div className='andy'>
             <div className='imagem-personagens'>
              <img src="/img/atriz anne.webp" alt="" />
            
              <div className='texto-personagem'>
              <h4>Anne Hathaway</h4>
              <p>Renomada atriz ganhadora de vários prêmios, incluindo um Oscar</p>
             </div>
             </div>
              <h4>Andrea Sachs</h4>
              <p>Assistente de Miranda</p>
            </div>

            <div className='miranda'>
               <div className='imagem-personagens'>
              <img src="/img/atriz merly.jpg" alt="" />
              <div className='texto-personagem'>
              <h4>Meryl Streep</h4>
              <p>Uma atriz norte-americana, descrita como a "melhor atriz de sua geração"</p>
             </div>
             </div>
              <h4>Miranda Priestly</h4>
              <p>Editora da revista Runway</p>
            </div>

            <div className='emily'>
              <div className='imagem-personagens'>
              <img src="/img/atriz emily.jpg" alt="" />
              <div className='texto-personagem'>
              <h4>Emily Blunt</h4>
              <p>atriz britânica, detentora de diversos prêmios, incluindo um Globo de Ouro</p>
             </div>
             </div>
              <h4>Emily Charlton</h4>
              <p>Assistente sênior de Miranda</p>
            </div>

              <div className='serena'>
                <div className='imagem-personagens'>
              <img src="/img/atriz gisele.webp" alt="" />
               <div className='texto-personagem'>
              <h4>Gisele Bündchen</h4>
              <p>Uma supermodelo, empresária, filantropa e ativista ambiental brasileira.</p>
             </div>
              </div>
              <h4>Serena</h4>
              <p>Assistente de Miranda</p>
            </div>
          </div>

          <div className='personagens-titulo-mc'>
          <h2>Personagens Masculinos</h2>
          <p>Conheça os personagens principais do filme!</p>

          </div>

          <div className='card-personagens-masculino'>

            <div className='stanley'>
              <div className='imagem-personagens-mc'>
               <img src="/img/ator stanley.jpg" alt="" />
              <div className='texto-personagem-mc'>
              <h4>Stanley Tucci</h4>
              <p>Ator, diretor, produtor e roteirista norte-americano</p>
             </div>
             </div>
              <h4>Nigel Kipling</h4>
              <p>Diretor de arte da Runway</p>
            </div>

            <div className='simon'>
              <div className='imagem-personagens-mc'>
              <img src="/img/ator simon.webp" alt="" />
             <div className='texto-personagem-mc'>
              <h4>Simon Baker</h4>
              <p>Um ator, diretor e produtor australiano. Mais conhecido por ser o personagem principal em "O Mentalista"</p>
             </div>
             </div>
              <h4>Christian Thompson</h4>
              <p>Escritor charmoso e seduto</p>
            </div>

            <div className='adrian'>
              <div className='imagem-personagens-mc'>
              <img src="/img/ator adrian.png" alt="" />
               <div className='texto-personagem-mc'>
              <h4>Adrian Grenier</h4>
              <p>Um ator estadunidense, mais conhecido por sua participação em O Diabo Veste Prada</p>
             </div>
             </div>
              <h4>Nate Cooper</h4>
              <p>Namorado de Andy Sachs</p>
            </div>

            <div className='daniel'>
               <div className='imagem-personagens-mc'>
              <img src="/img/ator daniel.jpg" alt="" />
              <div className='texto-personagem-mc'>
              <h4>Daniel Sunjata</h4>
              <p>Um ator americano, conhecido por seu papel como Franco Rivera na série de televisão Rescue Me</p>
             </div>
             </div>
              <h4>James Holt</h4>
              <p>Jovem estilista de Moda</p>
            </div>

          </div>
        </section>
      </div>

      <div className='sinopse'>
        <section id='resumo'>
          <div className='sessao-sinopse'>
          <div className='imagem-sinopse'>
            <img src="/img/prada.webp" alt="" />
          </div>
          <div className='sinopse-texto'>
          <h2>Sinopse: O Luxo tem um Preço</h2>
          <p>No impiedoso mundo da moda de Nova York, a revista Runway é o cálice sagrado, e sua editora-chefe, Miranda Priestly (Meryl Streep), é a divindade que o protege. Entrar nesse universo, porém, não fazia parte dos planos de Andy Sachs (Anne Hathaway), uma jornalista recém-formada que despreza o futilismo das passarelas, mas aceita o cargo de assistente de Miranda na esperança de abrir portas em sua carreira.</p>
        </div>
        </div>
        </section>

      </div>

    <div className='final'>
      <footer>
        <div className='texto-footer'>
        <div className='titulo-footer'>
        <h4>O Diabo Veste Prada</h4>
        </div>
        <div className='imagens-footer'>
          <a href="https://github.com/ariellsilva" target='blank'><img src="/img/logo github.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/ariellsilva" target='blank'><img src="/img/logo linkedin.webp" alt="" /></a>
        </div>
       <div className='direitos-footer'>
        <p>©Studios Disney.Todos os direitos reservados</p>
        <p>Produzido por 20th Century Studios</p>
      </div>
      </div>
      </footer>
    </div>

 
    </main>
    </div>


  )
}

export default App

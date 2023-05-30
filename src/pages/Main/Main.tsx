import {data} from "../../data"
import './Main.css';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
function Main() {


    return (
      <>
        <Header/>
        <main id="main">
            <section className="noticias">
                <h1 className="title-noticias">Últimas notícias</h1>
                <div className="cards-noticias">
                    
                    {data.map((item)=>(
                      <div className='card'>
                          <div className="card-noticia">
                              <div className="imagem-noticia">
                                  <div className='square'/>
                              </div>
                              <div className="texto-noticia">
                                  <p className="topico-noticia">{item.topico}</p>
                                  <h1 className="titulo-noticia">{item.titulo}</h1>
                                  <p className="descricao-noticia">{item.descricao}</p>
                                  <p className="data-noticia">{item.data}</p>
                              </div>
                          </div>
                      </div>
                      ))}
                  
                </div>
            </section>
            <section className="texto-introducao">
                <div className="texto">
                    <h1>Texto</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet sem purus. Maecenas ut dapibus magna, quis sodales eros. Maecenas aliquam quam risus, in lobortis lorem facilisis id. Fusce cursus nisi sed mi placerat, sed commodo magna efficitur. Mauris iaculis vitae lacus et gravida. Sed gravida ipsum a augue rhoncus fermentum. Suspendisse tincidunt est et dolor rutrum, in faucibus sem semper. In risus nisi, tincidunt id enim sit amet, venenatis imperdiet dui. Cras eget consequat neque.</p>
                </div>
  
            </section>
            <section className="noticias">
                <h1 className="title-noticias">Eventos</h1>
                <div className="cards-noticias">
                    
                    {data.map((item)=>(
                      <div className='card'>
                          <div className="card-noticia">
                              <div className="imagem-noticia">
                              <div className="square"></div> 
                              </div>
                              <div className="texto-noticia">
                                  <p className="topico-noticia">{item.topico}</p>
                                  <h1 className="titulo-noticia">{item.titulo}</h1>
                                  <p className="descricao-noticia">{item.descricao}</p>
                                  <p className="data-noticia">{item.data}</p>
                              </div>
                          </div>
                      </div>
                      ))}
                  
                </div>
            </section>
          </main>
        <Footer isMainPage={true}/>
      </>
    );
  }
  
  export default Main;
  
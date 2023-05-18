import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import {data} from "./data"
import './App.css';
import logoCinfo from "./assets/img/logo-cinfo-01.png"
import brasil from "./assets/img/icons-bandeiras/bandeira-brasil.png"
import inglaterra from "./assets/img/icons-bandeiras/bandeira-inglaterra.png"
import espanha from "./assets/img/icons-bandeiras/bandeira-espanha.png"
import logoCinfoo from "./assets/img/logo-cinfo-02.png"
import ifal from "./assets/img/logo-ifal.png"
import anterior from "./assets/img/seta-esquerda.svg"
import livro from "./assets/img/imagem-livro.png"
import direita from "./assets/img/seta-direita.svg"
import face from "./assets/img/face.png"
import telefone from "./assets/img/phone.svg"
import email from "./assets/img/email.svg"
import instagram from "./assets/img/instagram.svg"
import youtube from "./assets/img/youtube.svg"
import maps from "./assets/img/localizacao.png"

function App() {


  return (
    <>
      <div id="barra-brasil" style={{background:"#7F7F7F", height: "20px", padding:"0 0 0 10px", display:"block"}}>
          <ul id="menu-barra-temp" style={{listStyle:"none"}}>
          <li style={{display:"inline", float:"left", paddingRight:"10px", marginRight:"10px", borderRight:"1px solid #EDEDED"}}>
              <a href="http://brasil.gov.br" style={{fontFamily:"sans, sans-serif", textDecoration:"none", color:"white"}}>Portal do Governo Brasileiro</a>
          </li>
          </ul>
      </div>

      <header id="header">
          <div className="header-imagem">
              <img className="logo-cinfo" src={logoCinfo} alt="Logo da CINFO - Cordanação de Informática do Instituto Federal de Alagoas."/>
          </div>

          <div>
              <nav className="header-menu">
                  <div className="dropdown">
                      <a href='#'>
                          A Cinfo
                      </a>
                      <div className="dropdown-content">
                          <ul>
                              <a href="#"><li className="item-dropdown-content"><span>Nossa história</span></li></a>
                              <a href="#"><li className="item-dropdown-content">Docentes</li></a>
                              <a href="#"><li className="item-dropdown-content">Nossa estrutura</li></a>
                              <a href="#"><li>Agenda de salas e laboratórios</li></a>
                          </ul>
                      </div>
                  </div>
                  <div className="dropdown">
                      <a href="#">
                          Ensino Técnico
                      </a>
                      <div className="dropdown-content">
                          <ul>
                              <a href="#"><li className="item-dropdown-content"><span>Coordenação</span></li></a>
                              <a href="#"><li className="item-dropdown-content">PPC</li></a>
                              <a href="#"><li className="item-dropdown-content">Calendário Letivo</li></a>
                              <a href="#"><li>Documentos</li></a>
                          </ul>
                      </div>
                  </div>
                  <div className="dropdown">
                      <a href="#">
                          Ensino Superior
                      </a>
                      <div className="dropdown-content">
                          <ul>
                              <a href="#"><li className="item-dropdown-content"><span>Coordenação</span></li></a>
                              <a href="#"><li className="item-dropdown-content">PPC</li></a>
                              <a href="#"><li className="item-dropdown-content">Calendário Letivo</li></a>
                              <a href="#"><li className="item-dropdown-content">Documentos</li></a>
                              <a href="#"><li className="item-dropdown-content">Cases de Sucesso</li></a>
                              <a href="#"><li className="item-dropdown-content">Repositório de TCCs</li></a>
                              <a href="#"><li>Documentos</li></a>
                          </ul>
                      </div>
                  </div>
                  <div className="dropdown">
                      <a href="https://youtube.com">
                          Pesquisa e Extensão
                      </a>
                      <div className="dropdown-content">
                          <ul>
                              <a href="#"><li className="item-dropdown-content"><span>O que é?</span></li></a>
                              <a href="#"><li className="item-dropdown-content">Grupos de Pesquisa</li></a>
                              <a href="#"><li className="item-dropdown-content">Projetos em andamento</li></a>
                              <a href="#"><li className="item-dropdown-content">Projetos concluídos</li></a>
                              <a href="#"><li>Artigos publicados</li></a>
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>

          <div>
              <nav className="header-menu-languages">
                  <ul>
                      <li><a href="#"><img src={brasil} alt="Bandeira do Brasil."/></a></li>
                      <li><a href="#"><img src={inglaterra} alt="Bandeira da Inglaterra."/></a></li>
                      <li><a href="#"><img src={espanha} alt="Bandeira da Espanha."/></a></li>
                  </ul>
              </nav>
          </div>
      </header>

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

      <footer>
          <div className="top-footer">
              <div style={{overflow:"hidden",height:"100%",width:"50%",color: "#0095eb"}}>
                  <div id='gmap_canvas' style={{height:"300px",width:"100%"}}></div>
                  <img src={maps} alt="localização do ifal"/>
              </div>
              <div className="right-top-footer">
                  <h1>Entre em contato</h1>
                  <p>Para falar diretamente com a coordenação, professores ou técnicos, acesse a aba correspondente para obter o contato. Para outras informações, reclamações, elogios ou dúvidas:</p>
                  <div className="contato">
                      <img src={telefone} alt="Ícone de um telefone."/>
                      <p>+55 82 99999-9999</p>
                  </div>
                  <div className="contato">
                      <img src={email} alt="Ícone de um email."/>
                      <p>cinfo@ifal.edu.br</p>
                  </div>
              </div>
          </div>

        <div className="bottom-footer">

            <img src={ifal} alt='Logo Ifal' />
            <div className='alinhamento'>  
                <div className="redes-sociais">
                    <a href='#' target='new_blank'><img style={{width: "43.5px"}} alt='Ícone do Facebook' src={face}/></a>
                    <a href="https://www.instagram.com/cinfoifal/" target="new_blank"><img src={instagram} alt="Ícone do Instagram."/></a>
                    <a href="https://www.youtube.com/@coordenacaodeinformatica-c4303" target="new_blank"><img src={youtube} alt="Ícone do Youtube."/></a>
                </div>
                <div className="direitos">
                    <p>© 2022 Cinfo | Todos os direitos reservados.</p>
                </div>
            </div>
            <div style={{width:150}}/>
        </div>
      </footer>

    </>
  );
}

export default App;

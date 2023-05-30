import logoCinfo from "../../../assets/img/logo-cinfo-01.png"
import brasil from "../../../assets/img/icons-bandeiras/bandeira-brasil.png"
import inglaterra from "../../../assets/img/icons-bandeiras/bandeira-inglaterra.png"
import espanha from "../../../assets/img/icons-bandeiras/bandeira-espanha.png"
import "./Header.css"



export default function Header(){
    return(
        <header id="header">
        <a href="/" className="header-imagem">
            <img className="logo-cinfo" src={logoCinfo} alt="Logo da CINFO - Cordanação de Informática do Instituto Federal de Alagoas."/>
        </a>

        <div>
            <nav className="header-menu">
                <div className="dropdown">
                    <a href='#'>
                        A Cinfo
                    </a>
                    <div className="dropdown-content">
                        <ul>
                            <a href="#"><li className="item-dropdown-content"><span>Nossa história</span></li></a>
                            <a href="/Docentes"><li className="item-dropdown-content">Docentes</li></a>
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

    )
}
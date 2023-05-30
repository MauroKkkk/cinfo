import ifal from "../../../assets/img/logo-ifal.png"
import face from "../../../assets/img/face.png"
import telefone from "../../../assets/img/phone.svg"
import email from "../../../assets/img/email.svg"
import instagram from "../../../assets/img/instagram.svg"
import youtube from "../../../assets/img/youtube.svg"
import maps from "../../../assets/img/localizacao.png"
import "./Footer.css"

export default function Footer(props: { isMainPage: Boolean }){
    if(props.isMainPage){
        return(
            <footer>
            <div className="top-footer">
                <div>
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
        )
    } else {
        return(
            <footer>
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
        )
        
    }

}
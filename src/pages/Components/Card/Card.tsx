import "./Card.css"


export default function Card(){
    return(
        <div className="Card">
            <div style={{margin:"0.3em"}}/>
           <h1>Nome</h1>
           <div style={{margin:"0.7em"}}/>
           <img className="Image" src="https://static.vecteezy.com/system/resources/previews/002/534/006/original/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg" alt="Imagem do Docente"/>
           <div style={{margin:"0.4em"}}/>
           <h5>Email</h5>
           <div style={{margin:"0.1em"}}/>
           <h5>Link currículo lattes</h5>
        </div>
    )
}
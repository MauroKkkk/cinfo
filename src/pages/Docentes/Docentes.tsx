import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "./Docentes.css"
import {data} from "../../data"
export default function Docentes(){
    return(
        <>
        <Header/>
            <main>

                <section className="Docentes">
                    <div className="Docentes-title">
                        <h1>Docentes</h1>
                    </div>
                    <Card/>
                </section>

            </main>
        <Footer isMainPage={false}/>
        </>
    )
}
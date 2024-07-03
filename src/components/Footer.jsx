import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <section>
            <div className="email-footer">
                <h2>FIQUE POR DENTRO DE NOSSAS PRMOÇÕES!</h2>
                <input type="email" name="email" id="email-promocoes" placeholder="Preencha com seu e-mail:"/>
                <button type="submit">INSCREVER</button>
            </div>
            <div className="institutional-footer">
                <div>
                    <Link to="/">VTM Sports</Link>
                    <ul className="follow">
                        <h3 style={{width:"30vw"}}>Siga-nos</h3>
                        <li><a href="#"></a>Youtube</li>
                        <li><a href="#"></a>Instagram</li>
                        <li><a href="#"></a>Kwai</li>
                        <li><a href="#"></a>TikTok</li>
                        <li><a href="#"></a>Pinterest</li>
                    </ul>
                </div>
                <div>
                    <h3>Institucional</h3>
                    <ul>
                        <li>Sobre Nós</li>
                        <li>Política de Frete</li>
                        <li>Termos e Condições</li>
                        <li>Duvidas Frequêntes</li>
                        <li>Garantia</li>
                    </ul>
                </div>
                <div>
                    <h3>Contato</h3>
                    <ul>
                        <li>Número</li>
                        <li>Email</li>
                        <li>Endereço</li>
                    </ul>
                </div>
            </div>
            <p style={{textAlign:"center", height:"4vh", backgroundColor:"#003785", color:"white"}}>Feico com React Router DOM Por Vitório Mota</p>
        </section>
    )
}
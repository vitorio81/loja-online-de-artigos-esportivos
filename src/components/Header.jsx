import LinksCategory from "./LinksCatedory";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <div className="cadastre-se">
                Cadastre-se e ganhe 10% de desconto na sua primeira compra| Frete grátis a parti de R$159,90| Parcelamos em 6x sem juros!
            </div>
            <NavBar />
            <LinksCategory/>
        </header>
    )
}
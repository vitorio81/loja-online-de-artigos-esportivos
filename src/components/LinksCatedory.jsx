import { Link } from "react-router-dom";

export default function LinksCategory(){
    return (
        <ul className="linkscategory">
             <li>
                <Link to="/products">Todos os Produtos</Link>
            </li>
            <li>
                <Link to="/tennis">Tênis</Link>
            </li>
            <li>
                <Link to="/tshirts">Camisetas</Link>
            </li>
            <li>
                <Link to="shorts">Shorts</Link>
            </li>
            <li>
                <Link to="/otheracessories">Outros Acessórios</Link>
            </li>
        </ul>
    )
}

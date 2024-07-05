import { Link } from "react-router-dom"
import useStock from "../contexts/useStock"

export default function ItemsProduct () {
    const { items } = useStock()
    return (
        <section style={{padding:"30px 50px",}}>
            <h2>Todos os nosso produtos</h2>
            <p>Confira todas as nossas ofertas!</p>
            <section className="products">
                <ul style={{display:"flex", gap:"4rem", justifyContent:"center", flexWrap:"wrap"}}>
                    {items.map((item) => (
                        <li key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <h5 style={{marginTop:"2rem"}}>{item.name}</h5>
                            <p>{item.descriptionsimples}</p>
                            <p style={{marginTop:"2rem"}}>A partir de:</p>
                            <strong>
                                <p>R$ {item.price}</p>
                            </strong>
                            <span>Avaliaçãom do cliente</span>
                            <Link to={`/products/${item.id}`}>
                                <button>Comprar</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}
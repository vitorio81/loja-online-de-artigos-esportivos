import products from "../../database.json"
import { Link } from "react-router-dom"

export default function Products() {
    return (
        <section style={{padding:"30px 50px",}}>
            <h2>Todos os nosso produtos</h2>
            <p>Confira todas as nossas ofertas!</p>
            <section className="products">
                <ul style={{display:"flex", gap:"4rem", justifyContent:"center", flexWrap:"wrap"}}>
                    {products.map((product) => (
                        <li key={product.id}>
                            <img src="../../imagens/98142905.avif" alt="" />
                            <h5>{product.name}</h5>
                            <p style={{marginTop:"2rem"}}>A partir de:</p>
                            <strong>
                                <p>R$ {product.price}</p>
                            </strong>
                            <span>Avaliaçãom do cliente</span>
                            <Link to={`/products/${product.id}`}>
                                <button>Comprar</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}
import products from "../../database.json"
import { Link } from "react-router-dom"

export default function Products() {
    return (
        <section>
            <h2>Essa é a página de Todos os Produtos!</h2>
            <p>Confira todas as nossas ofertas</p>
            <section className="products">
                <ul style={{display:"flex", gap:"4rem", justifyContent:"center", flexWrap:"wrap"}}>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h4>{product.name}</h4>
                            <p>R$ {product.price}</p>
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
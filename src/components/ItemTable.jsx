import { Link } from "react-router-dom";
import useStock from "../contexts/useStock";
import DeleteButton from "./DeleteButton";
import { Button } from 'reactstrap';

export default function ItemsTable() {
  const { items } = useStock();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity} unid.</td>
            <td>{item.category}</td>
            <td style={{display:"flex",gap:"1rem", justifyContent:"center"}}>
              <Link to={`/items/${item.id}`}>
                <Button color="success">
                  <Link to="/products" style={{color:"white"}}>Ver</Link>
                </Button>
              </Link>
              <Link to={`/items/${item.id}/update`}>
                <Button color="warning">
                  Atualizar
                </Button>
              </Link>
              <DeleteButton itemName={item.name} itemId={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
import { Link } from "react-router-dom";
import ItemsTable from "../../components/ItemTable";

export default function AdminHome() {
    return (
        <section>
            <Link to="/adminregister">
            <button>Cadastrar</button>
            </Link>
            <ItemsTable/>
        </section>
    )
}
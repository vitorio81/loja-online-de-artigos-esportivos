import { Link } from "react-router-dom";
import ItemsTable from "../../components/ItemTable";
import { Button } from 'reactstrap';

export default function AdminHome() {
    return (
        <section>
            <header className="header-register">Aqui você monitora todos os seus peodutos:</header>
            <ItemsTable/>
            <Link to="/adminregister">
                <Button color="primary" style={{marginLeft:"5rem", marginTop:"3rem"}}>
                    Cadastrar
                </Button>
            </Link>
        </section>
    )
}
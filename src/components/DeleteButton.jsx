import { useNavigate } from "react-router-dom";
import useStock from "../contexts/useStock";
import PropTypes from "prop-types"

DeleteButton.propTypes = {
    itemId: PropTypes.number,
    itemName: PropTypes.string
}

export default function DeleteButton({itemId, itemName}) {

    const { deleteItem } = useStock()
    const navigate = useNavigate()
    const handleDelete = () => {
        if (confirm(`Tem certeza que deseja EXCLUIR ${itemName}?`)) {
            deleteItem(itemId)
            navigate("/admin")
        }
    }
    
    return (
        <button onClick={handleDelete}>
            Excluir
        </button>
    )
}
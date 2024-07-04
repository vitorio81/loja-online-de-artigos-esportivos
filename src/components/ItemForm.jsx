import { useState } from "react"
import PropTypes from "prop-types"
import StockItem, { CATEGORIES } from "../entities/StockItem"
import useStock from "../contexts/useStock"

ItemForm.propTypes = {
    itemToUpdate: PropTypes.object
}


export default function ItemForm({itemToUpdate}) {
    const defaultItem = {
        name: "",
        descriptionsimples: "",
        descriptionlonga: "",
        quantity:0,
        price: 0,
        category: ""
    }

    const [item , setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
    const { addItem } = useStock()

    const handleChange = (ev) => { 
        setItem(currentState => {
            return {
                ...currentState,
                [ev.target.name] : ev.target.value
            }
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()

        try {
            const validtItem = new StockItem(item)
            addItem(validtItem)
            alert(`Item $(item.name) cadastrado com sucesso!`)
        } catch (err) {

        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={item.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantidade:</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                required
                min={0}
                step={1}
                value={item.quantity}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="price">Preço:</label>
              <input
                type="number"
                name="price"
                id="price"
                required
                min={0.00}
                step={0.01}
                value={item.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="category">Categoria:</label>
              <select
                name="category"
                id="category"
                required
                value={item.category}
                onChange={handleChange}
              >
                <option disabled value="">Selecione uma categoria...</option>
                {CATEGORIES.map((category) => (
                  <option
                    key={category}
                    value={category}
                    defaultChecked={item.category === category}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="descriptionsimples">Descrição Simples:</label>
            <textarea
              name="descriptionsimples"
              id="descriptionsimles"
              required
              rows={6}
              value={item.descriptionsimples}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="descriptionlonga">Descrição Longa:</label>
            <textarea
              name="descriptionlonga"
              id="descriptionlonga"
              required
              rows={7}
              value={item.descriptionlonga}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="button-submit">
            Salvar
          </button>
        </form>
      )
}
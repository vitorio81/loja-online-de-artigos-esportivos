import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import StockItem, { CATEGORIES } from "../entities/StockItem"
import useStock from "../contexts/useStock"
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

ItemForm.propTypes = {
  itemToUpdate: PropTypes.object
}


export default function ItemForm({ itemToUpdate }) {
  const defaultItem = {
    name: "",
    descriptionsimples: "",
    descriptionlonga: "",
    quantity: 0,
    price: 0,
    category: "",
    img: ""
  }

  const [item, setItem] = useState(defaultItem)
  const { addItem } = useStock()

  const handleChange = (ev) => {
    setItem(currentState => {
      return {
        ...currentState,
        [ev.target.name]: ev.target.value
      }
    })
  }


  const handleSubmit = (ev) => {
    ev.preventDefault()

    try {
      const validtItem = new StockItem(item)
      addItem(validtItem)
      alert(`Item ${item.name} cadastrado com sucesso!`)
    } catch (err) {

    }
  }


  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label
          for="name"
          sm={2}
        >
          Nome:
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="name"
            id="name"
            required
            value={item.name}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="quantity"
          sm={2}
        >
          Quantidade:
        </Label>
        <Col sm={10}>
          <Input
            type="number"
            name="quantity"
            id="quantity"
            required
            min={0}
            step={1}
            value={item.quantity}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="price"
          sm={2}
        >
          Preço:
        </Label>
        <Col sm={10}>
          <Input
            type="number"
            name="price"
            id="price"
            required
            min={0.00}
            step={0.01}
            value={item.price}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="exampleSelectMulti"
          sm={2}
        >
          Select Multiple
        </Label>
        <Col sm={10}>
          <Input
            type="select"
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
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="descriptionsimples"
          sm={2}
        >
          Descrição Simples:
        </Label>
        <Col sm={10}>
          <Input
            type="textarea"
            name="descriptionsimples"
            id="descriptionsimples"
            required
            rows={6}
            value={item.descriptionsimples}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="descriptionlonga"
          sm={2}
        >
          Descrição Longa:
        </Label>
        <Col sm={10}>
          <Input
            type="textarea"
            name="descriptionlonga"
            id="descriptionlonga"
            required
            rows={7}
            value={item.descriptionlonga}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label
          for="img"
          sm={2}
        >
          File
        </Label>
        <Col sm={10}>
          <Input
            type="url"
            name="img"
            id="img"
            required
            placeholder="Cole aqui a URL da imgem do seu produto:"
            onChange={handleChange}
            style={{backgroundColor:"white"}}
          />

        </Col>
      </FormGroup>
      <Button>
        Submit
      </Button>
    </Form>

  )
}
export const CATEGORIES = [
    "Jogos",
    "Livros",
    "Brinquedos",
    "Acessórios"
  ]

export default class StockItem {
    constructor ({name, descriptionsimples, descriptionlonga, quantity, price, category}) {
        this.id = Math.floor(Math.random() *1000000)
        this.name = name
        this.descriptionsimples = descriptionsimples
        this.descriptionlonga = descriptionlonga
        this.quantity = +quantity
        this.price = +price
        this.category = category
        this.createdAt = new Date()
        this.#validate()
    }

    #validate() {
        const validName = typeof this.name === "string"
        const validDescriptionSimples = typeof this.descriptionsimples === "string"
        const validDescriptionLonga = typeof this.descriptionlonga === "string"
        const validQuantity = typeof this.quantity === "number" && Number.isInteger(this.quantity)
        const validPrice = typeof this.price === "number"
        const validCategory = CATEGORIES.includes(this.category)
        if (!(
          validName &&
          validDescriptionSimples &&
          validDescriptionLonga &&
          validQuantity &&
          validPrice &&
          validCategory
        )) {
          throw new Error("Invalid item!")
        }
      }
}
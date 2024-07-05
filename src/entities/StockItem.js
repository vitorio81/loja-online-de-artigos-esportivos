export const CATEGORIES = [
    "Jogos",
    "Livros",
    "Brinquedos",
    "Acessórios"
  ]

export default class StockItem {
    constructor ({name, descriptionsimples, descriptionlonga, quantity, price, category, img}) {
        this.id = Math.floor(Math.random() *1000000)
        this.name = name
        this.descriptionsimples = descriptionsimples
        this.descriptionlonga = descriptionlonga
        this.quantity = +quantity
        this.price = +price
        this.category = category
        this.img = img
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
        const validImg = typeof this.img === "string"
        if (!(
          validName &&
          validDescriptionSimples &&
          validDescriptionLonga &&
          validQuantity &&
          validPrice &&
          validCategory &&
          validImg
        )) {
          throw new Error("Invalid item!")
        }
      }
}
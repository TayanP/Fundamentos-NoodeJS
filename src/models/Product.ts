type Product = {
  title: string
  price: number
}

const data: Product[] = [
  { title: 'Produto b', price: 5 },
  { title: 'Produto x', price: 10 },
  { title: 'Produto y', price: 20 },
  { title: 'Produto w', price: 50 },
  { title: 'produto a', price: 100 },
]

export const Product = {
  //getAll retorna todos os dados
  getAll: (): Product[] => {
    return data
  },
  getFromPriceAfter: (price: number): Product[] => {
    return data.filter(item => item.price >= price)
  },
}

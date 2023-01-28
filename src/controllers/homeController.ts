import { Request, Response } from 'express'
import { Product } from '../models/Product'

export const home = (req: Request, res: Response) => {
  let age: number = 15
  let show: boolean = false

  if (age > 50) {
    show = true
  }

  let list = Product.getAll()
  let expensiveList = Product.getFromPriceAfter(12)

  res.render('pages/home', {
    name: 'tayan',
    age: 37,
    show,
    products: list,
    expensives: expensiveList,
    lista: ['alguma coisa legal', 'assitir um filme'],
  })
}

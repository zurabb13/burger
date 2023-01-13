import { CartItem } from './cartItem'

export class Order {
    id!: number
    items!: CartItem[]
    totalPrice!: number
    name!: string
    payment!: string
    createdAd!: string
    status!: string
    address!: string
}

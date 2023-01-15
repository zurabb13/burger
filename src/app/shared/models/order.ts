import { CartItem } from './cartItem'
import { LatLng } from 'leaflet'

export class Order {
    id!: number
    items!: CartItem[]
    totalPrice!: number
    name!: string
    payment!: string
    createdAd!: string
    adressLng!: LatLng
    status!: string
    address!: string
}

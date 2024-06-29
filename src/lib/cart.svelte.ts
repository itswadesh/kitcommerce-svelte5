import { getContext, onDestroy, setContext } from 'svelte'
import type { Cart } from './types'
import type CartItem from './components/cart-item.svelte'

export class CartState {
  cart_items = $state<Cart[]>([])
  summary = $state({})
  cartToTimeoutMap = new Map<string, number>()

  constructor() {
    onDestroy(() => {
      for (const timeout of this.cartToTimeoutMap.values()) {
        clearTimeout(timeout)
      }
      this.cartToTimeoutMap.clear()
    })
  }

  add({ qty, product }: any) {
    const x = this.cart_items.find((c) => c.product.id == product.id)
    if (x) {
      x.qty = x.qty + qty
      if (x.qty < 1) {
        this.cart_items = this.cart_items.filter(
          (cart) => cart.product.id !== product.id
        )
      }
    } else {
      const item_id = crypto.randomUUID()
      this.cart_items.push({ item_id, qty, product })
    }
    this.summary = calculateSummary(this.cart_items)
    // this.cartToTimeoutMap.set(
    //   item_id,
    //   setTimeout(() => {
    //     this.remove(item_id)
    //   }, 50000)
    // )
  }

  // remove(item_id: string, qty: number) {
  //   const timeout = this.cartToTimeoutMap.get(item_id)
  //   if (timeout) {
  //     clearTimeout(timeout)
  //     this.cartToTimeoutMap.delete(item_id)
  //   }
  //   this.cart_items = this.cart_items.filter((cart) => cart.item_id !== item_id)
  //   this.summary = calculateSummary(this.cart_items)
  // }
}

const CART_KEY = Symbol('CART')

export function setCartState() {
  return setContext(CART_KEY, new CartState())
}

export function getCartState() {
  return getContext<ReturnType<typeof setCartState>>(CART_KEY)
}

function calculateSummary(cart_items: Cart[]) {
  let total_qty = 0
  let total_amount = 0

  for (const { product, qty } of cart_items) {
    total_qty += qty || 1
    total_amount += product?.price * (qty || 1)
  }
  return { total_qty, total_amount: total_amount.toFixed(2) }
}

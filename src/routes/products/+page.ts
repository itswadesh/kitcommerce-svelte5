import { ProductService } from '$lib/services'
import type { Product } from '$lib/types'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  const productsRes = await ProductService.fetchProducts({})
  return {
    products: productsRes.products as Product[]
  }
}

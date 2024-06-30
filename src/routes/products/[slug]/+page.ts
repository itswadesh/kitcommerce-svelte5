import type { Product } from '$lib/types'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
  const slug = params.slug
  const products = await fetch(`https://dummyjson.com/products/${slug}`).then(
    (res) => res.json()
  )
  console.log(products)
  return {
    product: products as Product[]
  }
}

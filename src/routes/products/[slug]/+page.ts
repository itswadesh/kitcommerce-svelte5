import { ProductService } from '$lib/services'
import type { Product } from '$lib/types'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
  const slug = params.slug
  console.log('🚀 ~ constload:PageLoad= ~ slug:', slug)
  let product: any = {}
  try {
    product = await ProductService.fetchProduct({ slug })
    // console.log('🚀 ~ constload:PageLoad= ~ product:', product)
  } catch (e) {
    console.log('🚀 ~ constload:PageLoad= ~ e:', e)
  }
  return {
    product: product as Product[]
  }
}

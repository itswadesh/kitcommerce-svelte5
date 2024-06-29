export type Toast = {
  id: string
  title: string
  message: string
}
export type Cart = {
  item_id: string
  qty: number
  product: any
}
export type Product = {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  thumbnail: string
  images: string[]
}

export type CartProduct = {
  item_id: string
  product: Product
  qty: number
}

export type Dimensions = {
  width: number
  height: number
  depth: number
}

export type Review = {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export type Meta = {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

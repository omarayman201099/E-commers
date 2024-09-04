export interface Brands {
_id: any
image: any
images: any

name: any
  results: number
  metadata: Metadata
  data: Brands[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface DataBarand {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}

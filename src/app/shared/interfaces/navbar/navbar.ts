export interface NavbarInter {
  results: number
  metadata: Navbardata
  data: any[]
}

export interface Navbardata {
  currentPage: number
  numberOfPages: number
  limit: number
}

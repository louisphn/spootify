export type user = {
  country: string
  display_name: string
  email: string
  external_urls: {
    spotify: string
  }
  followers: {
    href: string | null
    total: number
  }
  href: string
  id: string
  images: {
    height: null
    url: string
    width: null
  }[]
  product: string
  type: string
  uri: string
}

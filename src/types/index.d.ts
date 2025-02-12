interface Comment {
  id: string
  content: string
  createdAt: string
}

interface PagedComment {
  totalCommentCount: number
  totalPageCount: number
  comments: Comment[]
}

interface Member {
  id: number
  name: string
  types?: string[]
  imgUrl: string
  part: string
  instagramUrl?: string
  linkedinUrl?: string
  githubUrl?: string
  behanceUrl?: string
  siteUrl?: string
}

interface ProductDetail {
  name: string
  shortName?: string
  category: string
  introduction: string
  description: string
  thumbnailUrl: string
  instagramUrl?: string
  serviceUrl?: string
  target: string
  problem: string
  solution: string
}

interface Product {
  productId: number
  type: string[]
  name: string
  introduction: string
  thumbnailUrl: string
  siteUrl: string | null
}

interface Team {
  teamName: string
  generation: string
  origin: string
  description: string
}

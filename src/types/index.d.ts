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

interface ProductMember {
  id: number
  name: string
  imgUrl: string
  part: string
  instagramUrl?: string
  linkedinUrl?: string
  githubUrl?: string
  behanceUrl?: string
}

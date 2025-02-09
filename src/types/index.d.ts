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

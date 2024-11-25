interface CommentsResponse {
  totalCommentCount: number
  totalPageCount: number
  comments: {
    content: string
    createdDate: string
  }[]
}

export const getComments = async (productId: string, page: number): Promise<CommentsResponse> => {
  const response = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments/${productId}/${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json()

  if (!response.isSuccess) {
    throw new Error(response.message)
  }

  return response.payload
}

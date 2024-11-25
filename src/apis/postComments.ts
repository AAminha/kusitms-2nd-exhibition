export const postComments = async (productId: string, content: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments/${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })

  return response.ok
}

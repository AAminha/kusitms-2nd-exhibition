export const postGuestBook = async (content: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guestbooks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })

  return response.ok
}

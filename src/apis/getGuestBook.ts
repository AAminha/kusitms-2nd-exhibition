interface GuestBookResponse {
  totalGuestBookCount: number
  totalPageCount: number
  guestBooks: { content: string; createdDate: string }[]
}

export const getGuestBook = async (page: number): Promise<GuestBookResponse> => {
  const response = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guestbooks/${page}`, {
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

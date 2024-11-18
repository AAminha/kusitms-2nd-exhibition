import { PEOPLE_NAVIGATION } from '@src/constants/people'

export interface GuestBookResponse {
  name: string
  imgUrl: string
  part: string
  instagramUrl: string | null
  linkedinUrl: string | null
  githubUrl: string | null
  behanceUrl: string | null
}

export const getMemberByType = async (
  type: keyof typeof PEOPLE_NAVIGATION
): Promise<GuestBookResponse[]> => {
  const response = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/members/${String(type).toLowerCase()}`, {
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

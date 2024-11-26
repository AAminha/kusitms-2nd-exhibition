export interface MemberResponse {
  name: string
  imgUrl: string
  part: string
  instagramUrl: string | null
  linkedinUrl: string | null
  githubUrl: string | null
  behanceUrl: string | null
  siteUrl?: string | null
}

export const getMembers = async (type: string): Promise<MemberResponse[]> => {
  const convertType = String(type).toLowerCase().split(' ')[0]
  const response = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/members/${convertType}`, {
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

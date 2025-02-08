export interface MemberResponse {
  name: string
  type: string[]
  imgUrl: string
  part: string
  instagramUrl?: string
  linkedinUrl?: string
  githubUrl?: string
  behanceUrl?: string
  siteUrl?: string
}

export const getMembers = async (): Promise<MemberResponse[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_URL}/data/members.json`)
    const data = await response.json()

    if (!Array.isArray(data)) {
      throw new Error('Invalid data format: Expected an array')
    }

    return data
  } catch (error) {
    console.error('Failed to fetch members:', error)
    throw error
  }
}

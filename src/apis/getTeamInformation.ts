import { MemberResponse } from '@src/apis/getMembers'

export interface TeamInformationResponse {
  teamName: string
  generation: string
  origin: string
  description: string
  memberInfos: MemberResponse[]
}

export const getTeamInformation = async (productId: string): Promise<TeamInformationResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FETCH_URL}/data/teams/${productId}.json`
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Failed to fetch team:', error)
    throw error
  }
}

import { MemberResponse } from '@src/apis/getMembers'

export interface TeamInformationResponse {
  teamName: string
  generation: string
  origin: string
  description: string
  memberInfos: MemberResponse[]
}

export const getTeamInformation = async (productId: string): Promise<TeamInformationResponse> => {
  const response = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teams/${productId}`, {
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

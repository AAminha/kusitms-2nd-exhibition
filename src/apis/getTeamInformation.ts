import fs from 'fs'
import path from 'path'

export interface TeamInformationResponse {
  teamName: string
  generation: string
  origin: string
  description: string
}

{
  /*export const getTeamInformation = async (productId: string): Promise<TeamInformationResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FETCH_URL}/data/teams/${productId}.json`,
      {
        cache: 'force-cache',
      }
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Failed to fetch team:', error)
    throw error
  }
}*/
}

export const getTeamInformation = async (productId: string): Promise<TeamInformationResponse> => {
  const filePath = path.join(process.cwd(), `public/data/teams/${productId}.json`)
  const fileData = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileData) as TeamInformationResponse
}

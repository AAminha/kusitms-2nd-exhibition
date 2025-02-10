import { supabase } from '@src/configs/supabase'

export interface MemberResponse {
  name: string
  types: string[]
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
    const { data, error } = await supabase.rpc('get_members')

    if (error) throw error

    return data
  } catch (error) {
    console.error('Failed to fetch members', error)
    throw error
  }
}
